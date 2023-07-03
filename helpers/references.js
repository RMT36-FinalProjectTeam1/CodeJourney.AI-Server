import axios from "axios";

const references = async (title, ref) => {
  let cx;
  if (ref == "w3schools") {
    //W3SCHOOLS Google Search
    cx = "257f62a7f0c264bf3";
  } else if (ref == "freecodecamp") {
    //FreeCodeCamp Google Search
    cx = "91e2baa6dd4df4e0d";
  } else if (ref == "jst") {
    //Javascript Tutorial Google Search
    cx = "27bdfaf1eeca3481d";
  } else if (ref == "medium") {
    //Javascript Tutorial Google Search
    cx = "80baddc7faf0a4148";
  }

  const { data } = await axios.get(
    "https://www.googleapis.com/customsearch/v1",
    {
      params: {
        key: "AIzaSyCghsGPwb4vGNnoSRmfQjt8Qx8B5Lh3zm4",
        cx: cx,
        q: title,
      },
    }
  );

  let { items } = data;
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
};

module.exports = references;

// references(`"Learn react redux"`, "medium");
