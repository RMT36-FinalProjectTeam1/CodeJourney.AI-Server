const axios = require("axios");

module.exports = async (title, ref) => {
  let cx;

  if (ref == "w3schools") {
    //W3SCHOOLS Google Search
    cx = "c7f4c29c9ea02477e";
  } else if (ref == "freecodecamp") {
    //FreeCodeCamp Google Search
    cx = "e3ced1917d4ab4aed";
  } else if (ref == "jst") {
    //Javascript Tutorial Google Search
    cx = "10f675e5cdb774d71";
  } else if (ref == "medium") {
    //Medium Google Search
    cx = "9727f8fddb3384252";
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
