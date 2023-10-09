function toggleMode() {
    // trocar a classe light do html
   document.documentElement.classList.toggle('light')

   //substituir a imagem de acordo com o tema
   const img = document.querySelector("#profile img")
   if (document.documentElement.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
   } else {
    img.setAttribute('src', './assets/avatar.png')
   }
}