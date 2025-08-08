export const metadata = {
  title: "RoyalKroia - Landing",
  description: "컬러와 상징으로 완성하는 데일리 실버",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
