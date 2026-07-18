"use client";

import { useMemo, useState } from "react";
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
    { name: "堡中堡", note: "朋友聚餐" },
    { name: "同乐坊", note: "家常正餐" },
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
const colors = [
  "#ff6b35", "#ffd166", "#2ec4b6", "#ff4d6d", "#8338ec", "#3a86ff",
  "#fb8500", "#8ac926", "#e63946", "#6a4c93", "#f4a261", "#00b4d8",
];

function Wheel({
  items,
  rotation,
  spinning,
}: {
  items: string[];
  rotation: number;
  spinning: boolean;
}) {
  const background = useMemo(() => {
    const step = 360 / items.length;
    return `conic-gradient(${items
      .map((_, i) => `${colors[i % colors.length]} ${i * step}deg ${(i + 1) * step}deg`)
      .join(",")})`;
  }, [items]);

  return (
    <div className="wheel-shell">
      <div className="pointer" aria-hidden="true" />
      <div
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
              style={{
                left: `${50 + Math.cos(rad) * radius}%`,
                top: `${50 + Math.sin(rad) * radius}%`,
              }}
              key={item}
            >
              {item}
            </span>
          );
        })}
        <div className="wheel-hub">吃</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [stage, setStage] = useState<"category" | "restaurant" | "done">("category");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [categoryHistory, setCategoryHistory] = useState<string[]>([]);
  const [restaurantHistory, setRestaurantHistory] = useState<string[]>([]);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const restaurantItems = selectedCategory
    ? foodMap[selectedCategory].map((item) => item.name)
    : [];
  const history = stage === "category" ? categoryHistory : restaurantHistory;
  const currentResult = stage === "category" ? selectedCategory : selectedRestaurant?.name ?? "";

  function spin() {
    if (spinning || history.length >= 3 || stage === "done") return;
    const pool =
      stage === "category"
        ? categories.filter((item) => !categoryHistory.includes(item))
        : foodMap[selectedCategory].filter((item) => !restaurantHistory.includes(item.name));
    const picked = pool[Math.floor(Math.random() * pool.length)];
    const pickedName = typeof picked === "string" ? picked : picked.name;
    const allItems = stage === "category" ? categories : restaurantItems;
    const pickedIndex = allItems.indexOf(pickedName);
    const sector = 360 / allItems.length;
    const extraTurns = 5 + Math.floor(Math.random() * 3);
    const target = rotation + extraTurns * 360 + (360 - pickedIndex * sector - sector / 2);

    setSpinning(true);
    setRotation(target);
    window.setTimeout(() => {
      if (stage === "category") {
        setSelectedCategory(pickedName);
        setCategoryHistory((prev) => [...prev, pickedName]);
      } else {
        setSelectedRestaurant(picked as Restaurant);
        setRestaurantHistory((prev) => [...prev, pickedName]);
      }
      setSpinning(false);
    }, 1750);
  }

  function confirm() {
    if (!currentResult || spinning) return;
    if (stage === "category") {
      setStage("restaurant");
      setRotation(0);
      setRestaurantHistory([]);
      setSelectedRestaurant(null);
    } else {
      setStage("done");
    }
  }

  function reset() {
    setStage("category");
    setSelectedCategory("");
    setSelectedRestaurant(null);
    setCategoryHistory([]);
    setRestaurantHistory([]);
    setRotation(0);
    setSpinning(false);
  }

  const amapUrl = selectedRestaurant
    ? `https://uri.amap.com/search?keyword=${encodeURIComponent(
        `${selectedRestaurant.name} 杭州`
      )}&city=杭州&callnative=1`
    : "#";

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

      {stage !== "done" ? (
        <section className="game-card">
          <div className="intro">
            <p className="eyebrow">{stage === "category" ? "ROUND 01 · 定个方向" : `ROUND 02 · ${selectedCategory}`}</p>
            <h1>{stage === "category" ? "转到什么，今晚就吃什么。" : "范围缩小，选出今晚这家。"}</h1>
            <p className="subtitle">每轮最多 3 次，抽过的选项不会再出现。转到满意就确认，别让选择困难饿坏你。</p>
          </div>

          <div className="game-grid">
            <div className="wheel-area">
              <Wheel
                items={stage === "category" ? categories : restaurantItems}
                rotation={rotation}
                spinning={spinning}
              />
            </div>

            <aside className="control-panel">
              <div className="counter">
                <span>本轮机会</span>
                <div>{[0, 1, 2].map((i) => <b className={i < history.length ? "used" : ""} key={i} />)}</div>
                <strong>{3 - history.length}<small> 次</small></strong>
              </div>

              <button className="spin-button" onClick={spin} disabled={spinning || history.length >= 3}>
                {spinning ? "命运正在转…" : history.length >= 3 ? "三次机会已用完" : currentResult ? "不满意，再转一次" : "开始转动"}
              </button>

              <div className={`result-ticket ${currentResult ? "show" : ""}`} aria-live="polite">
                <span>本次抽中</span>
                <strong>{currentResult || "等待转动"}</strong>
                {stage === "restaurant" && selectedRestaurant && (
                  <small>
                    {selectedRestaurant.note}
                    {selectedRestaurant.source && <em>{selectedRestaurant.source}补充</em>}
                  </small>
                )}
              </div>

              <button className="confirm-button" onClick={confirm} disabled={!currentResult || spinning}>
                {stage === "category" ? "就吃这类，选店去 →" : "确认，就吃这家！"}
              </button>

              {history.length > 0 && (
                <div className="history">
                  <span>本轮记录</span>
                  <ol>
                    {history.map((item, i) => (
                      <li className={item === currentResult ? "latest" : ""} key={item}>
                        <b>0{i + 1}</b>{item}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </aside>
          </div>
        </section>
      ) : (
        <section className="final-card">
          <div className="burst">✦</div>
          <p className="eyebrow">今晚的答案已经揭晓</p>
          <h1>{selectedRestaurant?.name}</h1>
          <p className="final-category">{selectedCategory} · {selectedRestaurant?.note}</p>
          {selectedRestaurant?.source && <span className="source-pill">高德榜单补充</span>}
          <div className="final-actions">
            <a href={amapUrl} target="_blank" rel="noreferrer">去高德搜这家 ↗</a>
            <button onClick={reset}>全部重来</button>
          </div>
          <p className="promise">不许反悔。现在，出发！</p>
        </section>
      )}

      <footer>
        <span>HANGZHOU FOOD ROULETTE</span>
        <p>内置 {categories.length} 个大类 · {Object.values(foodMap).flat().length} 个杭州吃饭灵感</p>
      </footer>
    </main>
  );
}
