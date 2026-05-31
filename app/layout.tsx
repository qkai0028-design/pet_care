import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛绒护理屋 | 宠物洗护与美容",
  description: "一对一宠物洗护、美容造型、皮毛护理和预约服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
