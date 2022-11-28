export default {
  type: 'bubble',
  size: 'micro',
  header: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Gighy Stickers',
        weight: 'bold',
        size: 'lg',
        align: 'center',
        color: '#ffffff'
      }
    ],
    spacing: 'none',
    margin: 'none',
    borderWidth: 'none',
    backgroundColor: '#222222'
  },
  hero: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'separator'
      },
      {
        type: 'image',
        url: 'https://i.giphy.com/media/HEnPH4yCtVdqSeJhxN/giphy.webp',
        margin: 'none',
        size: 'lg',
        animated: true
      },
      {
        type: 'separator'
      }
    ],
    backgroundColor: '#000000'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'dog i cant handle this GIF',
        size: 'md',
        align: 'center',
        wrap: true,
        color: '#ffffff',
        action: {
          type: 'uri',
          label: 'action',
          uri: 'https://i.giphy.com/media/HEnPH4yCtVdqSeJhxN/giphy.webp'
        }
      }
    ],
    backgroundColor: '#222222'
  }
}
