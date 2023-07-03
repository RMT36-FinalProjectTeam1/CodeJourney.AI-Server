const fs = require('fs')
const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
module.exports = async (prompt) => {

  const { data } = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.75,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const date = Date.now().toString()
  fs.writeFileSync(`./response${date}.json`, JSON.stringify(data, null, 2))
  
  return json.parse(data.choices[0].text);
}