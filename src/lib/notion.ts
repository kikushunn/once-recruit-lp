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
  page.properties["画像"]?.files?.[0]?.file?.url ||
  page.properties["画像"]?.files?.[0]?.external?.url ||
  url(page.properties["画像URL"]) ||
  (page.properties["店舗名"]?.title?.[0]?.plain_text === "神楽坂店"
    ? "/kagurazaka.png"
    : "/edogawabashi.png"),
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
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_INTERVIEW_DB_ID!,
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
    name: title(page.properties["名前"]),
    comment: text(page.properties["コメント"]),
    imageUrl:
      page.properties["写真"]?.files?.[0]?.file?.url ||
      page.properties["写真"]?.files?.[0]?.external?.url ||
      "/hero.png",
    role: text(page.properties["役職"]),
    store: text(page.properties["勤務店舗"]),
  }));
}
export async function getRewards() {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_REWARD_DB_ID!,
    filter: {
      property: "表示ON/OFF",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "表示順",
        direction: "ascending",
      },
    ],
  });
  return response.results.map((page: any) => ({
    id: page.id,
    title: title(page.properties["タイトル"]),
    amount: text(page.properties["金額"]),
    description: text(page.properties["説明"]),
  }));
}
export async function getHero() {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_HERO_DB_ID!,
    filter: {
      property: "表示ON/OFF",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "表示順",
        direction: "ascending",
      },
    ],
  });

  const page = response.results[0] as any;

  return {
    label:
      page.properties["英字ラベル"]?.rich_text?.[0]?.plain_text || "",

    title:
      page.properties["メインコピー"]?.rich_text?.[0]?.plain_text || "",

    subtitle:
      page.properties["サブコピー"]?.rich_text?.[0]?.plain_text || "",
backgroundImage:
  page.properties["背景画像"]?.files?.[0]?.file?.url ||
  page.properties["背景画像URL"]?.url ||
  "/hero.png",
  };
}
export async function getFaqs() {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_FAQ_DB_ID!,
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: title(page.properties["タイトル"]),
    answer: text(page.properties["回答"]),
  }));
}
export async function getCtas() {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_CTA_DB_ID!,
    filter: {
      property: "表示ON/OFF",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "表示順",
        direction: "ascending",
      },
    ],
  });


  return response.results.map((page: any) => ({
    id: page.id,
    title: title(page.properties["タイトル"]),
    buttonText: text(page.properties["ボタン文言"]),
    url: page.properties["遷移URL"]?.url || "",
    description: text(page.properties["説明文"]),
  }));
}
export async function getHeroSection() {
  const response = await notion.search({
    query: "メインビジュアル",
  });

  return [];
}
export async function getJobDetails() {
  const response = await notion.dataSources.query({
  data_source_id: process.env.NOTION_JOB_DETAIL_DB_ID!,
});

  return response.results;
}
export async function getEnvironments() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_ENVIRONMENTS_DB_ID!,
  });

  return response.results;
}

export async function getFlowSteps() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_FLOW_STEPS_DB_ID!,
  });

  return response.results;
}