import 'dotenv/config'
import linebot from 'linebot'
import fetchSearch from './commands/fetchSearch.js'
import fetchTranslate from './commands/fetchTranslate.js'
import fetchTrending from './commands/fetchTrending.js'
import fetchStickers from './commands/fetchStickers.js'
// import express from 'express'
import axios from 'axios'
import giphyApi from 'giphy-api'

const giphy = giphyApi('siAOWyd2crNrRiKmXrYVi1xsjQtJkSMF')
const pattern = new RegExp('[\u4E00-\u9FA5]+')
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// const app = express()

bot.on('message', event => {
  if (event.message.type !== 'text') return
  if (event.message.text === '找貼紙') {
    fetchStickers(event)
  } else if (event.message.text === '熱門') {
    fetchTrending(event)
  } else if (event.message.text) {
    fetchSearch(event)
  } else if (event.message.text === pattern) {
    fetchTranslate(event)
  } else {
    event.reply('抓不到資料')
  }
})

// const linebotParser = bot.parser()
// app.post('/', linebotParser)
// app.get('/', (req, res) => {
//   res.status(200).send('ok')
// })

// app.listen(process.env.PORT || 3000, () => {
//   console.log('機器人啟動')
// })

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
