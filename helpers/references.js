const axios = require("axios");

module.exports = async (title, ref) => {
  let cx;

  if (ref == "w3schools") {
    //W3SCHOOLS Google Search
    // cx = "76d61d142e04b472b"; //API BHAGAS
    cx = 'e0aec80f8cc5a418b'
  } else if (ref == "freecodecamp") {
    //FreeCodeCamp Google Search
    // cx = "813d48500b81f487c"; //API BHAGAS
    cx = 'b0ddccc3e98174f29'
  } else if (ref == "jst") {
    //Javascript Tutorial Google Search
    // cx = "e1548f4f097f44a80"; //API BHAGAS
    cx = 'f315cf61fa6064a0d'
  } else if (ref == "medium") {
    //Medium Google Search
    // cx = "b0f005ac1e2564bdd"; //API BHAGAS
    cx = 'c508bb205a0e94d5f'
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
