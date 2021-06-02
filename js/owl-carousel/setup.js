// Setup Owl Carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10, // Espaço entre as divs
  nav:false, // Setas direita / esquerda
  responsive:{
      0:{ // Width 0 ~ 599px
          items:1 // Mostra apenas 1 item por vez
      },
      600:{ // Width 600 ~ 999px
          items:3 // Mostra 3 por vez
      },
      1000:{ // Width 1000px+
          items:5 // Mostra 5 por vez
      }
  }
})