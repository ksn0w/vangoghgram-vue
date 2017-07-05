module.exports = {
  build: {
    vendor: ['axios']
  },
  head:{
    script:[
      {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
      {src:'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js'}
    ],
    meta:[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link:[
      {href:'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css', rel:'stylesheet'},
      {href:'https://fonts.googleapis.com/css?family=Lobster', rel:'stylesheet'}
    ]
  },
  css:[
    { src: '~assets/css/main.scss', lang: 'scss' }
  ]
}