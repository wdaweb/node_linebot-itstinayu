import axios from 'axios'
import giphyApi from 'giphy-api'
import template from '../templates/Trending.js'
const giphy = giphyApi('siAOWyd2crNrRiKmXrYVi1xsjQtJkSMF')

const main = async () => {
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
    const trendings = []
    randoms.forEach(function (i) {
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.hero.url = `https://i.giphy.com/media/${res.data[i].id}/giphy.webp`
      bubble.hero.action.uri = `https://giphy.com/gifs/${res.data[i].slug}`
      bubble.body.contents[0].text = res.data[i].title
      bubble.body.contents[2].action.uri = `https://giphy.com/gifs/${res.data[i].slug}`
      bubble.body.contents[3].action.uri = 'https://giphy.com/trending-gifs'
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
    console.log(reply)
    console.log(trendings)
  } catch (error) {
    console.log(error)
  }
}
main()
