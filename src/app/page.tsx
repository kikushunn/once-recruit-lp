import { getStores } from "@/lib/notion";

export default async function Home() {
  const stores = await getStores();

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-black text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 font-bold">
            PILATES STUDIO ONCE
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            女性専用
            <br />
            マシンピラティス
            <br />
            インストラクター募集
          </h1>

          <p className="mt-6 text-xl text-gray-300">
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
          <h2 className="text-4xl font-bold">
            募集中の店舗
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {stores.map((store: any) => (
              <div
                key={store.id}
                className="border rounded-3xl p-6 shadow-sm"
              >
                <h3 className="text-2xl font-bold">
                  {
                    store.properties["店舗名"]
                      ?.title?.[0]?.plain_text
                  }
                </h3>

                <p className="mt-3 text-gray-600">
                  {
                    store.properties["エリア"]
                      ?.rich_text?.[0]?.plain_text
                  }
                </p>

                <p className="mt-3 font-bold text-green-600">
                  {
                    store.properties["給与"]
                      ?.rich_text?.[0]?.plain_text
                  }
                </p>

                <a
                  href="https://line.me/"
                  className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full"
                >
                  応募する
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}