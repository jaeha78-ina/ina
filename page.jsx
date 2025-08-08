export default function Page() {
  const products = [
    { id: 1, name: "Minimal Line Ring", price: 59000, colors: ["#000000", "#C0C0C0", "#FFD700"], image: "https://picsum.photos/seed/ring1/800/600" },
    { id: 2, name: "Iris Miro", price: 89000, colors: ["#111827", "#4B5563", "#F59E0B"], image: "https://picsum.photos/seed/ring2/800/600" },
    { id: 3, name: "Zodiac Ring", price: 69000, colors: ["#1F2937", "#9CA3AF", "#10B981"], image: "https://picsum.photos/seed/ring3/800/600" },
    { id: 4, name: "Skull Emblem", price: 129000, colors: ["#0F172A", "#64748B", "#E11D48"], image: "https://picsum.photos/seed/ring4/800/600" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="font-semibold text-xl tracking-tight">RoyalKroia</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:opacity-80">제품</a>
            <a href="#story" className="hover:opacity-80">브랜드 스토리</a>
            <a href="#contact" className="hover:opacity-80">문의</a>
            <button className="h-9 px-3 rounded-md border hover:bg-gray-100">지금 보기</button>
          </nav>
          <button className="md:hidden h-9 px-3 rounded-md border">메뉴</button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            컬러와 상징으로 완성하는 <span className="underline decoration-4 decoration-gray-900">데일리 실버</span>
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            925 실버, 24K 도금, 세라믹 코팅 컬러까지. 원하는 무드에 맞춰 선택하세요.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#products" className="h-10 px-5 rounded-md bg-gray-900 text-white inline-flex items-center justify-center">베스트 보기</a>
            <a href="#story" className="h-10 px-5 rounded-md border inline-flex items-center justify-center">브랜드 스토리</a>
          </div>
          <ul className="mt-6 text-sm text-gray-500 list-disc pl-5 space-y-1">
            <li>무료 사이즈 상담</li>
            <li>맞춤 각인 옵션(한글 가능)</li>
            <li>국내 제작 · 빠른 AS</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img src="https://picsum.photos/seed/hero-ring/1200/900" alt="메인 주얼리" className="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">베스트 상품</h2>
          <a href="#" className="text-sm underline underline-offset-4">전체 보기</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <div key={p.id} className="group overflow-hidden border rounded-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <div className="p-4">
                <div className="text-base md:text-lg font-semibold">{p.name}</div>
                <div className="mt-1 flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.price.toLocaleString()}원</div>
                  <div className="flex items-center gap-1">
                    {p.colors.map((c, i) => (
                      <span key={i} className="inline-block w-4 h-4 rounded-full border" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <button className="w-full mt-3 h-10 rounded-md bg-gray-900 text-white">장바구니</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-xl md:text-2xl font-semibold">우리의 약속</h3>
          <p className="mt-3 text-gray-600">
            로열크로이아는 컬러와 상징성을 담아, 일상에서 착용하기 쉬운 실버 주얼리를 만듭니다. 
            오래 쓰는 기본 디자인에 브랜드의 세계관을 더해, 당신의 이야기를 완성합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 rounded-full bg-gray-100">#925Silver</span>
            <span className="px-2 py-1 rounded-full bg-gray-100">#24KGoldPlated</span>
            <span className="px-2 py-1 rounded-full bg-gray-100">#CeramicColor</span>
            <span className="px-2 py-1 rounded-full bg-gray-100">#K-Gothic</span>
          </div>
        </div>
        <div className="order-1 md:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img src="https://picsum.photos/seed/story/1200/900" alt="브랜드 스토리" className="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">문의하기</h3>
          <p className="mt-2 text-gray-600">제작/각인/사이즈 상담이 필요하면 아래 버튼을 눌러 주세요.</p>
          <div className="mt-4 flex gap-3 flex-wrap">
            <button className="h-10 px-4 rounded-md bg-gray-900 text-white" onClick={() => alert('카카오 채널로 이동(연결 예정)')}>카카오 채널</button>
            <button className="h-10 px-4 rounded-md border" onClick={() => alert('이메일 폼으로 이동(연결 예정)')}>이메일</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 h-20 flex items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} RoyalKroia. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">이용약관</a>
            <a href="#" className="hover:opacity-80">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
