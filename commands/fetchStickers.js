import axios from 'axios'
import template from '../templates/stickers.js'
import giphyApi from 'giphy-api'
const giphy = giphyApi('siAOWyd2crNrRiKmXrYVi1xsjQtJkSMF')

export default async (event) => {
  try {
    const res = await giphy.search('stickers')
    console.log((res.data).length)
    const randoms = []
    while (randoms.length < 5) {
      const random = Math.ceil(1 + Math.floor(Math.random() * 50))
      if (randoms.indexOf(random) === -1) {
        randoms.push(random)
      }
    }
    console.log(randoms)
    const stickers = []
    randoms.forEach(function (i) {
      const bubble = JSON.parse(JSON.stringify(template))
      // console.log(bubble.body.contents[1].type)
      bubble.hero.contents[1].url = `https://i.giphy.com/media/${res.data[i].id}/giphy.webp`
      bubble.body.contents[0].text = res.data[i].title
      bubble.body.contents[0].action.uri = `https://i.giphy.com/media/${res.data[i].id}/giphy.webp`
      stickers.push(bubble)
    })
    const reply = {
      type: 'flex',
      altText: 'Stickers',
      contents: {
        type: 'carousel',
        contents: stickers
      }
    }
    event.reply(reply)
    console.log(stickers)
  } catch (error) {
    console.log('error')
  }
}
