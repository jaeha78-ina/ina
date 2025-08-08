'use client';
import { useMemo, useState } from 'react';

const COLORS = Array.from({length: 10}, (_,i)=>({id: i+1, name: String(i+1)}));
const DESIGNS = Array.from({length: 26}, (_,i)=>String.fromCharCode(65+i)); // A-Z

function skuOf(color, design){
  if(!color || !design) return "";
  return `C${color}-D${design}`;
}

export default function Page(){
  const [color, setColor] = useState(null);     // 1..10
  const [design, setDesign] = useState('');     // 'A'..'Z'
  const [qty, setQty] = useState(1);

  const selectedSku = useMemo(()=>skuOf(color, design), [color, design]);
  const imageUrl = useMemo(()=>{
    // 데모용 이미지: 조합마다 다른 시드
    const seed = `${color || 'x'}${design || 'x'}`;
    return `https://picsum.photos/seed/${seed}/1200/900`;
  }, [color, design]);

  const canAdd = color && design;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="font-semibold text-xl">RoyalKroia</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#detail" className="hover:opacity-80">상품</a>
            <a href="#how" className="hover:opacity-80">옵션 설명</a>
            <a href="#contact" className="hover:opacity-80">문의</a>
          </nav>
          <button className="md:hidden h-9 px-3 rounded-md border">메뉴</button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">옵션 선택 데모</h1>
          <p className="mt-4 text-gray-600 md:text-lg">컬러 10가지(1~10)와 디자인 26가지(A~Z)를 조합해 260개 변형을 선택할 수 있어요.</p>
          <ul className="mt-4 text-sm text-gray-500 list-disc pl-5 space-y-1">
            <li>모든 조합 판매 가능</li>
            <li>품절/불가 조합이 생기면 비활성 처리 가능</li>
            <li>SKU 포맷: <code>C[컬러]-D[디자인]</code> 예) C3-DK</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img src={imageUrl} alt="상품 미리보기" className="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </section>

      {/* DETAIL + OPTIONS */}
      <section id="detail" className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-10">
        <div className="order-2 md:order-1">
          <h2 className="text-xl md:text-2xl font-semibold">Minimal Line Ring</h2>
          <div className="mt-2 text-gray-500">가격: 59,000원</div>

          {/* Color selector */}
          <div className="mt-6">
            <div className="text-sm font-medium mb-2">컬러 (1~10)</div>
            <div className="grid grid-cols-5 gap-2 max-w-xs">
              {COLORS.map(c => (
                <button
                  key={c.id}
                  onClick={()=>setColor(c.id)}
                  className={"h-10 rounded-md border flex items-center justify-center select-none " + (color===c.id ? "ring-2 ring-gray-900 border-gray-900" : "hover:bg-gray-50")}
                  aria-pressed={color===c.id}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Design selector (dropdown) */}
          <div className="mt-6">
            <label className="text-sm font-medium mb-2 block">디자인 (A~Z)</label>
            <select
              value={design}
              onChange={(e)=>setDesign(e.target.value)}
              className="h-10 px-3 rounded-md border w-48"
            >
              <option value="" disabled>디자인 선택</option>
              {DESIGNS.map(d=>(
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Qty */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-medium">수량</span>
            <input type="number" min={1} value={qty} onChange={e=>setQty(parseInt(e.target.value||'1'))} className="h-10 w-20 rounded-md border px-3"/>
          </div>

          {/* Selected summary */}
          <div className="mt-6 p-4 rounded-xl bg-gray-50 text-sm">
            <div>선택한 컬러: <b>{color ?? '-'}</b></div>
            <div>선택한 디자인: <b>{design || '-'}</b></div>
            <div>SKU: <b>{selectedSku || '-'}</b></div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button
              disabled={!canAdd}
              className={"h-11 px-6 rounded-md text-white " + (canAdd ? "bg-gray-900" : "bg-gray-300 cursor-not-allowed")}
              onClick={()=>alert(`장바구니 담기: ${selectedSku} x ${qty}`)}
            >
              장바구니
            </button>
            <button
              disabled={!canAdd}
              className={"h-11 px-6 rounded-md border " + (canAdd ? "border-gray-900" : "border-gray-300 text-gray-400 cursor-not-allowed")}
              onClick={()=>alert(`바로구매: ${selectedSku} x ${qty}`)}
            >
              바로구매
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500">* 실제 결제는 아직 연결 전입니다. Toss/PortOne/Shopify 등과 연동해 드릴 수 있어요.</p>
        </div>

        {/* Gallery */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border">
            <img src={imageUrl} alt="선택 미리보기" className="absolute inset-0 w-full h-full object-cover"/>
          </div>
          <div className="mt-3 text-xs text-gray-500">선택한 조합에 따라 미리보기 이미지가 바뀝니다(데모용).</div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl border p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">옵션 구조</h3>
          <ol className="list-decimal pl-5 mt-3 space-y-1 text-gray-600">
            <li>컬러(1~10)와 디자인(A~Z) 선택 → 조합 키: <code>{`{color, design}`}</code></li>
            <li>SKU 규칙: <code>C[컬러]-D[디자인]</code></li>
            <li>재고/가격/이미지 분기 필요하면 서버/DB에서 <code>variants</code>로 관리</li>
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold">문의하기</h3>
          <p className="mt-2 text-gray-600">실제 결제/주문관리 연동이 필요하면 말씀해 주세요.</p>
          <div className="mt-4 flex gap-3 flex-wrap">
            <button className="h-10 px-4 rounded-md bg-gray-900 text-white" onClick={() => alert('카카오 채널(연결 예정)')}>카카오 채널</button>
            <button className="h-10 px-4 rounded-md border" onClick={() => alert('이메일 폼(연결 예정)')}>이메일</button>
          </div>
        </div>
      </section>

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
