import axios from 'axios'
import giphyApi from 'giphy-api'
const giphy = giphyApi('siAOWyd2crNrRiKmXrYVi1xsjQtJkSMF')

const main = async () => {
  try {
    const res = await giphy.search('cat')
    const random = Math.floor(Math.random() * 50)

    const reply = [
      {
        type: 'image',
        originalContentUrl: `https://i.giphy.com/media/${res.data[random].id}/giphy.webp`,
        previewImageUrl: `https://i.giphy.com/media/${res.data[random].id}/giphy.webp`
      },
      {
        type: 'text',
        text: `https://giphy.com/gifs/${res.data[random].slug}`
      }
    ]
    console.log(res.data[0].url)
    console.log(reply)
    // event.reply(reply)
  } catch (error) {
    console.log(error)
  }
}
main()
