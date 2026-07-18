import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "杭州今天吃什么 · 大转盘",
  description: "大类转三次，小类转三次，帮选择困难症决定今晚在杭州吃什么。",
  metadataBase: new URL("https://hangzhou-food-wheel.yummy-star-9933.chatgpt.site"),
  openGraph: {
    title: "杭州今天吃什么 · 大转盘",
    description: "大类转三次，店家转三次。今晚吃什么，交给手气。",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "杭州今天吃什么 · 大转盘",
    description: "大类转三次，店家转三次。今晚吃什么，交给手气。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
