import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function text(prop: any) {
  return prop?.rich_text?.[0]?.plain_text ?? "";
}

function title(prop: any) {
  return prop?.title?.[0]?.plain_text ?? "";
}

function url(prop: any) {
  return prop?.url ?? "";
}

function fileUrl(prop: any) {
  const file = prop?.files?.[0];
  if (!file) return "";
  return file.type === "file" ? file.file.url : file.external.url;
}

export async function getRecruitStores() {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_STORES_DB_ID!,
    filter: {
      property: "表示",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "並び順",
        direction: "ascending",
      },
    ],
  });

  return response.results.map((page: any) => ({
    id: page.id,
    name: title(page.properties["店舗名"]),
    area: text(page.properties["エリア"]),
    salary: text(page.properties["給与"]),
    imageUrl:
  page.properties["店舗名"]?.title?.[0]?.plain_text === "神楽坂店"
    ? "/kagurazaka.png"
    : "/edogawabashi.png",
    lineApplyUrl: url(page.properties["LINE応募URL"]) || "https://line.me/",
    shortPr: text(page.properties["一言PR"]),
  }));
}
export type Interview = {
  id: string;
  name: string;
  comment: string;
  imageUrl: string;
};

export async function getInterviews() {
  return [
    {
      id: "1",
      name: "KANA",
      comment: "マンツーマンなので、お客様一人ひとりとしっかり向き合えるのが魅力です。",
      imageUrl: "/hero.png",
      role: "インストラクター",
      store: "江戸川橋店",
    },
    {
      id: "2",
      name: "AYAKA",
      comment: "女性専用スタジオなので、落ち着いた雰囲気で働きやすいです。",
      imageUrl: "/hero.png",
      role: "インストラクター",
      store: "川崎店",
    },
  ];
}