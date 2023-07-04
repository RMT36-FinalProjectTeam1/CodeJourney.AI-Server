const axios = require("axios");

module.exports = async (title, ref) => {
  let cx;

  if (ref == "w3schools") {
    //W3SCHOOLS Google Search
    cx = "76d61d142e04b472b";
  } else if (ref == "freecodecamp") {
    //FreeCodeCamp Google Search
    cx = "813d48500b81f487c";
  } else if (ref == "jst") {
    //Javascript Tutorial Google Search
    cx = "e1548f4f097f44a80";
  } else if (ref == "medium") {
    //Medium Google Search
    cx = "b0f005ac1e2564bdd";
  }

  const { data } = await axios.get(
    "https://www.googleapis.com/customsearch/v1",
    {
      params: {
        key: process.env.GOOGLE_SEARCH_API_KEY,
        cx: cx,
        q: title,
      },
    }
  );

  let { items } = data;
  if (items) {
    items = items.slice(0, 5);
    items.forEach((el) => {
      delete el.kind;
      delete el.htmlTitle;
      delete el.displayLink;
      delete el.snippet;
      delete el.htmlSnippet;
      delete el.cacheId;
      delete el.formattedUrl;
      delete el.htmlFormattedUrl;
      delete el.pagemap;
    });
    return items;
  } else {
    return undefined;
  }
};
