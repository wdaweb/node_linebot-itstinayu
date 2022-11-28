export default {
  type: 'bubble',
  size: 'kilo',
  hero: {
    type: 'image',
    url: 'https://i.giphy.com/media/WZP3qaxYj10gU/giphy.webp',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'https://i.giphy.com/media/WZP3qaxYj10gU/giphy.webp'
    },
    animated: true
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'dog i cant handle this GIF',
        size: 'lg',
        align: 'center',
        wrap: true,
        contents: [],
        margin: 'md',
        color: '#ffffff',
        gravity: 'center'
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'separator'
      },
      {
        type: 'button',
        action: {
          type: 'uri',
          label: '➤ Giphy 看這張',
          uri: 'https://giphy.com/gifs/dog-puppy-embarrassed-WZP3qaxYj10gU'
        },
        color: '#FFFF00',
        height: 'sm',
        margin: 'md',
        offsetBottom: 'none',
        offsetTop: 'none'
      },
      {
        type: 'button',
        action: {
          type: 'uri',
          label: '➤ Giphy 看趨勢',
          uri: 'https://giphy.com/trending-gifs'
        },
        color: '#00D7FF',
        margin: 'none',
        height: 'sm'
      }
    ],
    backgroundColor: '#222222'
  },
  styles: {
    body: {
      backgroundColor: '#222222'
    }
  }
}
