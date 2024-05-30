import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taskify",
  description: "스마트하게 나의 일정을 관리해보자!",
  icons: {
    icon: "/taskify-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
