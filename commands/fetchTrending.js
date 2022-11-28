import axios from 'axios'
import template from '../templates/Trending.js'
import giphyApi from 'giphy-api'
import writejson from '../utils/writejson.js'
const giphy = giphyApi('siAOWyd2crNrRiKmXrYVi1xsjQtJkSMF')

export default async (event) => {
  try {
    const res = await giphy.trending()
    const randoms = []
    while (randoms.length < 10) {
      const random = Math.ceil(1 + Math.floor(Math.random() * 50))
      if (randoms.indexOf(random) === -1) {
        randoms.push(random)
      }
    }
    console.log(randoms)
    console.log(res.data.id)
    const trendings = []
    randoms.forEach(function (i) {
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.hero.url = `https://i.giphy.com/media/${res.data[i].id}/giphy.webp`
      bubble.hero.action.uri = `https://giphy.com/gifs/${res.data[i].slug}`
      bubble.body.contents[0].text = res.data[i].title
      bubble.footer.contents[1].action.uri = `https://giphy.com/gifs/${res.data[i].slug}`
      bubble.footer.contents[2].action.uri = 'https://giphy.com/trending-gifs'
      trendings.push(bubble)
    })
    const reply = {
      type: 'flex',
      altText: 'Trending HOT100',
      contents: {
        type: 'carousel',
        contents: trendings
      }
    }
    console.log(trendings)
    event.reply(reply)
  } catch (error) {
    console.log(error)
  }
}
