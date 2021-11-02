import React from "react"

const contentful = require("contentful")
export const ApiData = async (skip,limit)=>{
  const client = contentful.createClient({
    space: "tlqfiok8qhck",
    accessToken: "KQ17Gazu9xSq2yNvwDDOASVkxTvF55SOAkE0_6BRzmY",
    host: "cdn.contentful.com",
    environment: "test"
  });
  let apiData = await client.getEntries({
    limit: limit,
    skip: skip,
    content_type: "blogPost"
  })
  return {
    values:apiData.items,
    length: apiData.total
  };
}
