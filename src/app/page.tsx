import { getRecruitStores, getInterviews } from "@/lib/notion";
export const dynamic = "force-dynamic";
export default async function Home() {
  const stores = await getRecruitStores();
  const interviews = await getInterviews();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      {/* HERO */}
<section
  className="px-6 py-24 bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.82) 42%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%), url('/hero.png')",
  }}
>
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 font-bold">
            PILATES STUDIO ONCE
          </p>

          <h1 className="mt-6 text-[46px] font-bold leading-[1.15] tracking-tight text-[#545454] sm:text-6xl md:text-7xl">
  女性専用
  <br />
  マシンピラティス
  <br />
  インストラクター募集
</h1>

          <p className="mt-6 text-xl text-[#545454]">
  未経験歓迎 / 完全マンツーマン研修
</p>

          <a
            href="https://line.me/"
            className="inline-block mt-10 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-lg"
          >
            LINEで応募する
          </a>
        </div>
      </section>

      {/* STORE LIST */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
         <h2 className="text-[#ff751f]">
  募集中の店舗
</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {stores.map((store: any) => (
              <div
                key={store.id}
                className="border rounded-3xl p-6 shadow-sm"
              >
                <img
  src={store.imageUrl}
  alt={store.name}
  className="w-full h-[240px] object-cover rounded-2xl"
/>
 
                <h3 className="text-2xl font-bold text-[#ff751f]">
                  {store.name}
                </h3>
                {store.shortPr && (
  <p className="mt-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
    {store.shortPr}
  </p>
)}

                <p className="mt-3 text-gray-600">
                  {store.area}
                </p>

                <p className="mt-3 font-bold text-green-600">
                 {store.salary}
                </p>

                <a
                 href={store.lineApplyUrl}
                  className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full"
                >
                  応募する
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 bg-white">
  <div className="max-w-5xl mx-auto">
    <p className="text-green-600 font-bold">REWARD</p>

    <h2 className="mt-2 text-4xl font-bold text-[#545454]">
      報酬例
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        { title: "週2日勤務", amount: "月収 8万円〜", text: "副業として無理なく勤務したい方向け" },
        { title: "週3〜4日勤務", amount: "月収 15万円〜", text: "安定して入客したい方向け" },
        { title: "しっかり勤務", amount: "月収 25万円〜", text: "メイン収入として働きたい方向け" },
      ].map((item) => (
        <div key={item.title} className="rounded-3xl border border-gray-100 bg-[#f7fbf8] p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#545454]">{item.title}</h3>
          <p className="mt-4 text-3xl font-bold text-green-600">{item.amount}</p>
          <p className="mt-4 text-gray-600">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{interviews.map((item) => (
  <div
    key={item.id}
    className="overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100"
  >
    <img
      src={item.imageUrl}
      alt={item.name}
      className="h-[320px] w-full object-cover"
    />

    <div className="p-8">
      <p className="text-lg leading-8 text-gray-600">
        “{item.comment}”
      </p>

      <p className="mt-6 text-xl font-bold text-[#545454]">
        {item.name}
      </p>
    </div>
  </div>
))}
<section className="px-6 py-20">
  <div className="max-w-5xl mx-auto">
    <p className="text-green-600 font-bold">
      WORK STYLE
    </p>

    <h2 className="mt-2 text-4xl font-bold text-[#545454]">
      働きやすい環境づくり
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      
      <div className="rounded-3xl overflow-hidden shadow-sm">
        <img
          src="/hero.png"
          className="h-64 w-full object-cover"
        />

        <div className="bg-white p-6">
          <h3 className="text-xl font-bold">
            女性が働きやすい
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            女性専用スタジオのため、
            落ち着いた環境で働けます。
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-sm">
        <img
          src="/hero.png"
          className="h-64 w-full object-cover"
        />

        <div className="bg-white p-6">
          <h3 className="text-xl font-bold">
            未経験でも安心
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            研修制度があるため、
            未経験からでもスタートできます。
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-sm">
        <img
          src="/hero.png"
          className="h-64 w-full object-cover"
        />

        <div className="bg-white p-6">
          <h3 className="text-xl font-bold">
            集客好調
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            新規のお客様も多く、
            入客しやすい環境です。
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="px-6 py-20 bg-[#f7fbf8]">
  <div className="max-w-5xl mx-auto">
    <p className="text-green-600 font-bold">FLOW</p>

    <h2 className="mt-2 text-4xl font-bold text-[#545454]">
      勤務開始までの流れ
    </h2>

    <div className="mt-12 space-y-6">
      {[
        {
          step: "01",
          title: "LINEから応募",
          text: "まずはLINEよりお気軽にご応募ください。",
        },
        {
          step: "02",
          title: "オンライン面談",
          text: "働き方やご経験について簡単にお話しします。",
        },
        {
          step: "03",
          title: "店舗見学・体験",
          text: "実際のスタジオの雰囲気をご確認いただけます。",
        },
        {
          step: "04",
          title: "勤務スタート",
          text: "スケジュール調整後、勤務開始となります。",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="flex gap-6 rounded-3xl bg-white p-6 shadow-sm border border-gray-100"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white font-bold text-xl">
            {item.step}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#545454]">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="px-6 py-20 bg-white">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-600 font-bold">FAQ</p>

    <h2 className="mt-2 text-4xl font-bold text-[#545454]">
      よくある質問
    </h2>

    <div className="mt-10 space-y-4">
      {[
        {
          q: "勤務は週何日から可能ですか？",
          a: "週2日〜ご相談可能です。",
        },
        {
          q: "ピラティス資格は必要ですか？",
          a: "資格保有者・経験者は優遇しております。",
        },
        {
          q: "副業でも働けますか？",
          a: "業務委託契約のため、副業も可能です。",
        },
        {
          q: "どんなお客様が多いですか？",
          a: "20代〜40代の女性のお客様が中心です。",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-3xl border border-gray-100 bg-[#f7fbf8] p-6"
        >
          <h3 className="text-xl font-bold text-[#545454]">
            Q. {item.q}
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            A. {item.a}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="px-6 py-24 bg-[#f7fbf8]">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-green-600 font-bold">
      ENTRY
    </p>

    <h2 className="mt-4 text-5xl font-bold text-[#545454] leading-tight">
      まずはお気軽に<br />
      ご応募ください
    </h2>

    <p className="mt-6 text-lg text-gray-600 leading-8">
      見学のみ・ご質問のみでも大歓迎です。<br />
      LINEよりお気軽にお問い合わせください。
    </p>

    <a
      href="https://line.me/"
      className="inline-block mt-10 rounded-full bg-green-500 px-10 py-5 text-xl font-bold text-white shadow-lg hover:bg-green-400 transition"
    >
      LINEで応募する
    </a>
  </div>
</section>
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-100 bg-white/95 p-4 backdrop-blur md:hidden">
  <a
  href="https://line.me/"
  className="block w-full rounded-full bg-green-500 py-4 text-center text-lg font-bold text-white shadow-lg"
>
  LINEで簡単応募 →
</a>
</div>
    </main>
  );
}