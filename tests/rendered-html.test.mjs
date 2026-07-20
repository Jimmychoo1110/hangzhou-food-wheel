import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the mobile-first roulette shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>杭州今天吃什么 · 大转盘<\/title>/);
  assert.match(html, /今晚吃什么！/);
  assert.match(html, /aria-label="开始转动"/);
  assert.match(html, /就吃这类，选店去 →/);
  assert.match(html, /中式正餐类/);
  assert.doesNotMatch(html, /本轮机会|HANGZHOU FOOD ROULETTE/);
  assert.doesNotMatch(html, /<footer\b/i);
});

test("keeps selection, settlement, and verified dish data on one page", async () => {
  const [page, css, rankings] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/wheel.css", import.meta.url), "utf8"),
    readFile(new URL("../app/dish-rankings.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /wheel-hub/);
  assert.match(page, /<strong>不满意？<\/strong>/);
  assert.match(page, /<small>再转一次<\/small>/);
  assert.match(page, /className="final-actions"/);
  assert.match(page, /高德搜店/);
  assert.match(page, /看看外卖/);
  assert.match(page, /全部重来/);
  assert.match(page, /eleme:\/\/search\?keyword=/);
  assert.match(page, /uri\.amap\.com\/search\?keyword=/);
  assert.match(page, /callnative=1/);
  assert.doesNotMatch(page, /s\.m\.taobao\.com/);
  assert.match(page, /className="chance-ring"/);
  assert.match(page, /不想吃那些？点击这里拉入黑名单/);
  assert.match(page, /categoryBans/);
  assert.match(page, /restaurantBans/);
  assert.match(page, /!categoryBans\.includes\(item\)/);
  assert.match(page, /!restaurantBans\.includes\(item\.name\)/);
  assert.match(page, /没有更多可转选项/);
  assert.doesNotMatch(page, /className={`selection-summary/);
  assert.match(page, /<strong>不满意？<\/strong>/);
  assert.match(page, /<small>再转一次<\/small>/);
  assert.match(page, /stage !== "category" && selectedRestaurant/);
  assert.doesNotMatch(page, /className="control-panel"/);
  assert.doesNotMatch(page, /<footer>/);

  assert.match(css, /grid-template-columns:\s*repeat\(3/);
  assert.match(css, /width:\s*min\(354px/);
  assert.match(css, /52svh/);

  for (const brand of [
    "玖五京菜",
    "颂",
    "金沙厅",
    "桂语山房",
    "宝中宝食府",
    "同乐舫",
    "李白图书馆餐厅",
    "乔村二十八道",
  ]) {
    assert.match(rankings, new RegExp(brand));
  }
});
