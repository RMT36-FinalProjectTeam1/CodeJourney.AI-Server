const { default: axios } = require("axios")

module.exports = async(title) => {
  const { data } = await axios({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&type=video&key=${process.env.YOUTUBE_API_KEY}`,
    method:'get'
  })
  return {
    title: data.items[0].snippet.title,
    link:`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`
  }
}