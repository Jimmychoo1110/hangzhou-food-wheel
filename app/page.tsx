"use client";

import { useMemo, useRef, useState } from "react";
import type { CSSProperties, RefObject } from "react";
import { dishRankings } from "./dish-rankings";
import "./wheel.css";

type Restaurant = {
  name: string;
  note?: string;
  source?: "高德榜单";
};

const foodMap: Record<string, Restaurant[]> = {
  "烧烤类": [
    { name: "东京烧肉", note: "日式烧肉" },
    { name: "周姐焦烤鸡架", note: "焦香鸡架" },
    { name: "胖子烧烤", note: "烟火气选手" },
    { name: "黄龙海鲜大排档", note: "海鲜夜宵" },
    { name: "御牛道", note: "和牛烧肉" },
    { name: "牛表妹烤肉", note: "下沙人气烤肉", source: "高德榜单" },
  ],
  "中式正餐类": [
    { name: "玖五京菜", note: "京味正餐" },
    { name: "颂", note: "精致中餐" },
    { name: "金沙厅", note: "杭帮菜" },
    { name: "桂语山房", note: "江南意境菜" },
    { name: "宝中宝食府", note: "杭帮家常菜" },
    { name: "同乐舫", note: "老牌粤菜" },
    { name: "李白图书馆餐厅", note: "西溪湿地店", source: "高德榜单" },
    { name: "乔村二十八道", note: "未来科技城店", source: "高德榜单" },
  ],
  "面食类": [
    { name: "董胖哥", note: "嗦面快乐" },
    { name: "德源", note: "杭州面馆" },
    { name: "绿面", note: "特色面食" },
    { name: "慧娟面馆", note: "老杭州面" },
    { name: "奎元馆", note: "杭州老字号" },
  ],
  "炒菜类": [
    { name: "荆九爷", note: "下饭江湖菜" },
    { name: "抱抱爆炒", note: "锅气十足" },
    { name: "广西菜", note: "酸辣鲜香" },
    { name: "五十十五", note: "家常小馆" },
    { name: "小厨师", note: "家常热炒" },
    { name: "卤鸭儿", note: "卤味配炒菜" },
    { name: "越英核桃酒", note: "小酒配菜" },
    { name: "四灶儿", note: "杭帮家常" },
    { name: "洪恩", note: "朋友聚餐" },
    { name: "潮中人", note: "潮汕风味" },
    { name: "天目里云南菜", note: "云贵风味" },
  ],
  "洋人饭类": [
    { name: "椰香殿", note: "东南亚风味" },
    { name: "烤牛胸肉", note: "美式烟熏" },
    { name: "半藏", note: "日料" },
    { name: "中式融合不等", note: "创意融合菜" },
    { name: "木浦", note: "韩料" },
    { name: "肉肉大米", note: "日式定食" },
    { name: "十八号酒馆", note: "西餐小酒馆" },
    { name: "Lagom", note: "北欧感西餐" },
    { name: "鱼汀", note: "日料" },
    { name: "意美家", note: "牛排" },
    { name: "王品牛排", note: "仪式感西餐" },
  ],
  "外卖类": [
    { name: "草家酱蟹", note: "韩式酱蟹" },
    { name: "今晚清冰箱", note: "省钱隐藏款" },
    { name: "附近高分外卖", note: "交给平台筛选" },
  ],
  "汉堡炸鸡类": [
    { name: "跑马场", note: "手作汉堡" },
    { name: "Popeyes", note: "美式炸鸡" },
    { name: "Three Fingers", note: "炸鸡汉堡" },
  ],
  "自助类": [
    { name: "月龙吟", note: "放开吃" },
    { name: "竹里", note: "自助聚餐" },
    { name: "文兴酒家", note: "酒店自助" },
    { name: "汉巴味德", note: "巴西烤肉自助", source: "高德榜单" },
    { name: "厨艺全日西餐厅", note: "酒店自助", source: "高德榜单" },
  ],
  "辣辣辣": [
    { name: "阿英川菜", note: "川味猛攻" },
    { name: "赠李白", note: "辣味江湖菜" },
    { name: "川味泡菜", note: "酸辣开胃" },
    { name: "湘香蒸菜馆", note: "现蒸湘味", source: "高德榜单" },
  ],
  "火锅类": [
    { name: "泉市", note: "热辣开锅" },
    { name: "海底捞", note: "稳妥服务派" },
    { name: "山缓缓", note: "山野氛围" },
    { name: "鱼火锅", note: "鲜辣鱼锅" },
    { name: "老秦凉都黄牛肉馆", note: "滨江总店", source: "高德榜单" },
    { name: "不万能先生", note: "市井牛肉火锅", source: "高德榜单" },
  ],
  "杭帮菜": [
    { name: "入江南", note: "虎跑店", source: "高德榜单" },
    { name: "绿茶餐厅", note: "龙井路店", source: "高德榜单" },
    { name: "庆春里", note: "杭州嘉里中心店", source: "高德榜单" },
    { name: "外婆家", note: "经典杭帮菜" },
    { name: "老头儿油爆虾", note: "杭州家常味" },
  ],
  "随便吃点": [
    { name: "芳芳跷脚牛肉", note: "高沙店", source: "高德榜单" },
    { name: "发酵食堂", note: "创意小馆", source: "高德榜单" },
    { name: "胖哥俩肉蟹煲", note: "下沙店", source: "高德榜单" },
    { name: "新白鹿", note: "性价比聚餐" },
  ],
};

const categories = Object.keys(foodMap);
const colors = ["#ff6b35", "#ffd166", "#2ec4b6", "#ff4d6d", "#8338ec", "#3a86ff", "#fb8500", "#8ac926", "#e63946", "#6a4c93", "#f4a261", "#00b4d8"];

function Wheel({
  items,
  wheelRef,
  pointerRef,
  spinning,
  rotation,
  attempts,
  currentResult,
  onSpin,
  locked,
}: {
  items: string[];
  wheelRef: RefObject<HTMLDivElement | null>;
  pointerRef: RefObject<HTMLDivElement | null>;
  spinning: boolean;
  rotation: number;
  attempts: number;
  currentResult: string;
  onSpin: () => void;
  locked: boolean;
}) {
  const background = useMemo(() => {
    const step = 360 / items.length;
    return `conic-gradient(${items.map((_, i) => `${colors[i % colors.length]} ${i * step}deg ${(i + 1) * step}deg`).join(",")})`;
  }, [items]);

  return (
    <div className="wheel-shell">
      <div className="pointer" ref={pointerRef} aria-hidden="true" />
      <div
        ref={wheelRef}
        className={`wheel ${spinning ? "is-spinning" : ""}`}
        style={{ background, transform: `rotate(${rotation}deg)` }}
        aria-label={`转盘，共 ${items.length} 个选项`}
      >
        {items.map((item, i) => {
          const angle = (i + 0.5) * (360 / items.length) - 90;
          const rad = (angle * Math.PI) / 180;
          const radius = items.length > 10 ? 34 : 32;
          return (
            <span
              className={`wheel-label ${items.length > 10 ? "dense" : ""}`}
              style={{ left: `${50 + Math.cos(rad) * radius}%`, top: `${50 + Math.sin(rad) * radius}%` }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
      <button
        className={`wheel-hub ${currentResult ? "has-result" : ""}`}
        type="button"
        onClick={onSpin}
        disabled={spinning || attempts >= 3 || locked}
        aria-label={currentResult ? "不满意，再转一次" : "开始转动"}
      >
        <span className="hub-copy">
          {spinning ? (
            "转动中"
          ) : locked ? (
            "已选定"
          ) : attempts >= 3 ? (
            "本轮已用完"
          ) : currentResult ? (
            <>
              <strong>不满意？</strong>
              <small>再转一次</small>
            </>
          ) : (
            "转"
          )}
        </span>
        <i className="chance-ring" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <b
              className={index < attempts ? "used" : ""}
              style={{ "--segment-angle": `${index * 120}deg` } as CSSProperties}
              key={index}
            />
          ))}
        </i>
      </button>
    </div>
  );
}

export default function Home() {
  const [stage, setStage] = useState<"category" | "restaurant" | "done">("category");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [categoryHistory, setCategoryHistory] = useState<string[]>([]);
  const [restaurantHistory, setRestaurantHistory] = useState<string[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [settledRotation, setSettledRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const restaurantItems = selectedCategory ? foodMap[selectedCategory].map((item) => item.name) : [];
  const history = stage === "category" ? categoryHistory : restaurantHistory;
  const currentResult = stage === "category" ? selectedCategory : selectedRestaurant?.name ?? "";

  function tickPointer(angle: number, sector: number, previousTick: { value: number }) {
    const tick = Math.floor(angle / sector);
    if (tick === previousTick.value || !pointerRef.current) return;
    previousTick.value = tick;
    pointerRef.current.classList.remove("is-ticking");
    void pointerRef.current.offsetWidth;
    pointerRef.current.classList.add("is-ticking");
  }

  function finishSpin(picked: string | Restaurant, pickedName: string, target: number) {
    rotationRef.current = target;
    setSettledRotation(target);
    if (stage === "category") {
      setSelectedCategory(pickedName);
      setCategoryHistory((prev) => [...prev, pickedName]);
    } else {
      setSelectedRestaurant(picked as Restaurant);
      setRestaurantHistory((prev) => [...prev, pickedName]);
    }
    setSpinning(false);
  }

  function spin() {
    if (spinning || history.length >= 3 || stage === "done" || !wheelRef.current) return;
    const pool =
      stage === "category"
        ? categories.filter((item) => !categoryHistory.includes(item))
        : foodMap[selectedCategory].filter((item) => !restaurantHistory.includes(item.name));
    const picked = pool[Math.floor(Math.random() * pool.length)];
    const pickedName = typeof picked === "string" ? picked : picked.name;
    const allItems = stage === "category" ? categories : restaurantItems;
    const pickedIndex = allItems.indexOf(pickedName);
    const sector = 360 / allItems.length;
    const start = rotationRef.current;
    const currentMod = ((start % 360) + 360) % 360;
    const alignedMod = (360 - (pickedIndex + 0.5) * sector + 360) % 360;
    const alignment = (alignedMod - currentMod + 360) % 360;
    const exactTarget = start + (5 + Math.floor(Math.random() * 2)) * 360 + alignment;
    const magneticStart = exactTarget - Math.min(7, sector * 0.2);
    const accelerationTime = 480;
    const maxVelocity = 1.35;
    const accelerationDistance = 0.5 * maxVelocity * accelerationTime;
    const decelerationDistance = Math.max(900, magneticStart - start - accelerationDistance);
    const decelerationTime = (2 * decelerationDistance) / maxVelocity;
    const deceleration = -maxVelocity / decelerationTime;
    const begin = performance.now();
    const previousTick = { value: -1 };

    setSpinning(true);
    wheelRef.current.style.transition = "none";
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    const animate = (now: number) => {
      const elapsed = now - begin;
      let angle: number;
      if (elapsed <= accelerationTime) {
        const acceleration = maxVelocity / accelerationTime;
        angle = start + 0.5 * acceleration * elapsed * elapsed;
      } else {
        const coastTime = elapsed - accelerationTime;
        if (coastTime >= decelerationTime) {
          const wheel = wheelRef.current;
          if (!wheel) return;
          wheel.style.transform = `rotate(${magneticStart}deg)`;
          wheel.classList.add("is-snapping");
          requestAnimationFrame(() => {
            wheel.style.transform = `rotate(${exactTarget}deg)`;
          });
          window.setTimeout(() => {
            wheel.classList.remove("is-snapping");
            wheel.style.transition = "none";
            finishSpin(picked, pickedName, exactTarget);
          }, 360);
          return;
        }
        angle = start + accelerationDistance + maxVelocity * coastTime + 0.5 * deceleration * coastTime * coastTime;
      }
      if (wheelRef.current) wheelRef.current.style.transform = `rotate(${angle}deg)`;
      tickPointer(angle, sector, previousTick);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  }

  function confirm() {
    if (!currentResult || spinning) return;
    if (stage === "category") {
      rotationRef.current = 0;
      setSettledRotation(0);
      setRestaurantHistory([]);
      setSelectedRestaurant(null);
      setStage("restaurant");
    } else {
      setStage("done");
    }
  }

  function reset() {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    rotationRef.current = 0;
    setSettledRotation(0);
    setStage("category");
    setSelectedCategory("");
    setSelectedRestaurant(null);
    setCategoryHistory([]);
    setRestaurantHistory([]);
    setSpinning(false);
  }

  function openDelivery() {
    if (!selectedRestaurant) return;
    const keyword = encodeURIComponent(`${selectedRestaurant.name} 杭州`);
    window.location.href = `eleme://search?keyword=${keyword}`;
  }

  function openAmap() {
    if (!selectedRestaurant) return;
    const keyword = encodeURIComponent(`${selectedRestaurant.name} 杭州`);
    window.location.href = `https://uri.amap.com/search?keyword=${keyword}&city=杭州&view=list&src=hangzhou-food-wheel&callnative=1`;
  }

  const dishRanking = selectedRestaurant
    ? dishRankings[selectedRestaurant.name]
    : undefined;

  return (
    <main>
      <header className="topbar">
        <div className="brand">杭州 · 今天吃什么</div>
        <div className="stepper" aria-label="选择进度">
          <span className={stage === "category" ? "active" : "done"}>1 大类</span>
          <i />
          <span className={stage === "restaurant" ? "active" : stage === "done" ? "done" : ""}>2 店家</span>
          <i />
          <span className={stage === "done" ? "active" : ""}>3 开吃</span>
        </div>
      </header>

      <section className="game-card">
        <div className="intro-row">
          <div className="intro">
            <p className="eyebrow">{stage === "category" ? "ROUND 01 · 定个方向" : "ROUND 02 · 选出今晚这家"}</p>
            <h1>{stage === "category" ? "今晚吃什么！" : "吃哪家！"}</h1>
          </div>

          {selectedCategory && (
            <div className="sticker-row" aria-live="polite">
              <div className="category-sticker" key={`${selectedCategory}-${categoryHistory.length}`}>
                <img src="category-ticket.png" alt="" />
                <strong>{selectedCategory}</strong>
                <span className="comic-pop" aria-hidden="true">啪！</span>
              </div>
            </div>
          )}
        </div>

        <div className="game-grid">
          <div className="wheel-area">
            <Wheel
              key={stage === "category" ? "category-wheel" : `restaurant-wheel-${selectedCategory}`}
              items={stage === "category" ? categories : restaurantItems}
              wheelRef={wheelRef}
              pointerRef={pointerRef}
              spinning={spinning}
              rotation={settledRotation}
              attempts={history.length}
              currentResult={currentResult}
              onSpin={spin}
              locked={stage === "done"}
            />

            <div className={`selection-summary ${currentResult ? "show" : ""}`} aria-live="polite">
              <span>{stage === "category" ? "今晚方向" : "今晚这家"}</span>
              <strong>{currentResult || "点击圆心开始转"}</strong>
              {stage !== "category" && selectedRestaurant && (
                <small>
                  {selectedRestaurant.note}
                  {selectedRestaurant.source && <em>{selectedRestaurant.source}补充</em>}
                </small>
              )}
            </div>

            {stage !== "done" ? (
              <button className="confirm-button" onClick={confirm} disabled={!currentResult || spinning}>
                {stage === "category" ? "就吃这类，选店去 →" : "确认，就吃这家！"}
              </button>
            ) : (
              <>
                <div className="final-actions">
                  <button type="button" onClick={openAmap}>高德搜店</button>
                  <button className="delivery-button" onClick={openDelivery}>看看外卖</button>
                  <button className="reset-button" onClick={reset}>全部重来</button>
                </div>
                <p className="delivery-note">直接唤起高德地图或淘宝闪购，并自动搜索店名。</p>
              </>
            )}
          </div>
        </div>

        {stage !== "category" && selectedRestaurant && (
          dishRanking ? (
            <section className="dish-board">
              <div className="dish-heading">
                <div>
                  <p className="eyebrow">DISH RANKING · 品牌热门菜</p>
                  <h2>{selectedRestaurant.name}｜真实推荐菜</h2>
                </div>
                <span>已核实 {dishRanking.dishes.length} 道</span>
              </div>

              <div className="dish-grid">
                {dishRanking.dishes.map((dish, index) => (
                  <article className="dish-card" key={dish.name}>
                    <a
                      className="dish-photo"
                      href={dish.imageUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`查看${selectedRestaurant.name}${dish.name}实拍原图`}
                    >
                      <img
                        src={dish.imageUrl}
                        alt={`${selectedRestaurant.name} · ${dish.name}实拍`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <b>TOP {index + 1}</b>
                    </a>
                    <div className="dish-copy">
                      <h3>{dish.name}</h3>
                      <p>
                        {dish.recommendations !== undefined
                          ? `${dish.recommendations.toLocaleString("zh-CN")} ${dishRanking.metricLabel ?? "次公开推荐"}`
                          : dish.evidence ?? "公开推荐菜"}
                      </p>
                      <a href={dish.imageUrl} target="_blank" rel="noreferrer">
                        查看实拍原图 ↗
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <p className="dish-method">
                {dishRanking.methodology} 所列依据来自公开页面，不代表官方销量或官方销售排名。核实日期：{dishRanking.checkedAt}。
              </p>
              <div className="dish-sources">
                <span>核实来源</span>
                {dishRanking.sources.map((source) => (
                  <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                    {source.label} ↗
                  </a>
                ))}
              </div>
            </section>
          ) : (
            <section className="dish-board dish-verifying">
              <p className="eyebrow">DISH RANKING · 等待逐类核实</p>
              <h2>{selectedRestaurant.name}｜品牌菜品尚未整理</h2>
              <p>这里只展示能核实菜名、热度依据和品牌实拍的内容；不足 10 道时不会补齐。</p>
            </section>
          )
        )}
      </section>
    </main>
  );
}
