import NeoQuery from "../src/neo_query/index.js";

export default function $(query, isHTML) {
  //isHTML = optional argument
  if (typeof query === "function") {
    return document.addEventListener("DOMContentLoaded", query, { once: true });
  }
  const neoQuery = new NeoQuery();
  if (!isHTML) {
    return neoQuery.selectQuery(query);
  } else {
    return neoQuery.createHTML(query);
  }
}
