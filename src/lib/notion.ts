import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const databaseIds = {
  lpMaster: process.env.NOTION_LP_MASTER_DB_ID!,
  stores: process.env.NOTION_STORES_DB_ID!,
  sections: process.env.NOTION_SECTIONS_DB_ID!,
  cta: process.env.NOTION_CTA_DB_ID!,
};

export async function getStores() {
  const response = await notion.dataSources.query({
    data_source_id: databaseIds.stores,
    sorts: [
      {
        property: "表示順",
        direction: "ascending",
      },
    ],
  });

  return response.results;
}