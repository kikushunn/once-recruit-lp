import {
  getRecruitStores,
  getInterviews,
  getRewards,
  getFaqs,
  getCtas,
  getHero,
  getJobDetails,
  getEnvironments,
　getFlowSteps
} from "@/lib/notion";
export const dynamic = "force-dynamic";
export default async function Home() {
  const stores = await getRecruitStores();
  const hero = await getHero();
  const jobDetails = await getJobDetails();
  const jobDetailByTitle = Object.fromEntries(
  jobDetails.map((item: any) => [
    item.properties["タイトル"]?.title?.[0]?.plain_text,
    item.properties["内容"]?.rich_text?.[0]?.plain_text,
  ])
);

  const interviews = await getInterviews();
  const rewards = await getRewards();
  const faqs = await getFaqs();
  const ctas = await getCtas();
  const environments = await getEnvironments();
const flowSteps = await getFlowSteps();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      {/* HERO */}
<section
  className="px-6 py-24 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.82) 42%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%), url(${hero.backgroundImage})`,
  }}
>
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 font-bold">
            {hero.label}
          </p>

          <h1 className="mt-6 text-[28px] leading-tight font-bold tracking-tight text-[#545454] sm:text-[42px] md:text-7xl">
  {hero.title?.split("\n").map((line: string) => (
  <span key={line}>
    {line}
    <br />
  </span>
))}
</h1>

          <p className="mt-6 text-xl text-[#545454]">
  {hero.subtitle}
</p>

          <a
  href={ctas[0]?.url || "https://line.me/"}
  className="inline-block mt-10 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-lg"
>
  {ctas[0]?.buttonText || "LINEで応募する"}
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
      {/* JOB DETAIL */}
<section className="px-6 py-20 bg-[#f8f8f8]">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-[#545454]">
      募集要項
    </h2>

    <div className="mt-14 space-y-14">

      {/* 仕事内容 */}
      <div>
        <h3 className="bg-[#dce8c8] px-6 py-3 text-3xl font-bold text-[#545454]">
          仕事内容
        </h3>

        <ul className="mt-8 space-y-6 text-2xl text-[#545454]">
          <p>{jobDetailByTitle["仕事内容"]}</p>
        </ul>
      </div>

      {/* 雇用形態 */}
      <div>
        <h3 className="bg-[#dce8c8] px-6 py-3 text-3xl font-bold text-[#545454]">
          雇用形態
        </h3>

        <div className="mt-8 text-2xl text-[#545454] leading-10">
          <p className="whitespace-pre-wrap">
  {jobDetailByTitle["雇用形態"]}
</p>
        </div>
      </div>

      {/* 報酬 */}
      <div>
  <h3 className="bg-[#dce8c8] px-6 py-3 text-3xl font-bold text-[#545454]">
    報酬
  </h3>

  <div className="mt-8 text-lg sm:text-2xl text-[#545454]">
    <p className="whitespace-pre-wrap leading-relaxed">
      {jobDetailByTitle["報酬"]}
    </p>
  </div>
</div>

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
      {rewards.map((item) => (
  <div key={item.id} className="rounded-3xl border border-gray-100 bg-[#f7fbf8] p-8 shadow-sm">
    <h3 className="text-xl font-bold text-[#545454]">{item.title}</h3>
    <p className="mt-4 text-3xl font-bold text-green-600">{item.amount}</p>
    <p className="mt-4 text-gray-600">{item.description}</p>
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
{/* WORK STYLE */}
<section className="px-6 py-20 bg-white">
  <div className="max-w-5xl mx-auto">
    <p className="text-green-600 font-bold">WORK STYLE</p>

    <h2 className="mt-2 text-[36px] leading-tight font-bold text-[#545454] sm:text-[52px]">
      働きやすい環境づくり
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
  {environments.map((item: any) => (
    <div
      key={item.id}
      className="rounded-3xl overflow-hidden shadow-sm"
    >
      <img
        src="/hero.png"
        className="h-64 w-full object-cover"
      />

      <div className="bg-white p-6">
        <h3 className="text-[#d97706] text-2xl font-bold">
          {item.properties["タイトル"]?.title?.[0]?.plain_text}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {item.properties["説明"]?.rich_text?.[0]?.plain_text}
        </p>
      </div>
    </div>
  ))}
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
      {flowSteps.map((item: any) => (
        <div
          key={item.id}
          className="flex gap-6 rounded-3xl bg-white p-6 shadow-sm border border-gray-100"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white font-bold text-xl">
            {String(item.properties["並び順"]?.number).padStart(2, "0")}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#545454]">
              {item.properties["時間"]?.title?.[0]?.plain_text}
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
             {item.properties["内容"]?.rich_text?.[0]?.plain_text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="px-6 py-20 bg-[#f7fbf8]">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-600 font-bold">FAQ</p>

    <h2 className="mt-2 text-4xl font-bold text-[#545454]">
      よくある質問
    </h2>

    <div className="mt-10 space-y-6">
      {faqs.map((item) => (
        <div
          key={item.id}
          className="rounded-3xl bg-white p-8 shadow-sm"
        >
          <p className="text-xl font-bold text-[#545454]">
            Q. {item.title}
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            A. {item.answer}
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
  {ctas[1]?.title || "まずはお気軽にご応募ください"}
</h2>

    <p className="mt-6 text-lg text-gray-600 leading-8">
  {ctas[1]?.description || "見学のみ・ご質問のみでも大歓迎です。"}
</p>

<a
  href={ctas[1]?.url || "https://line.me/"}
  className="inline-block mt-10 rounded-full bg-green-500 px-10 py-5 text-xl font-bold text-white shadow-lg"
>
  {ctas[1]?.buttonText || "LINEで応募する"}
</a>

</div>
</section>

</main>
);
}