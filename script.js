function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const avatar = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        avatar.setAttribute('src','./assets/assets/avatar-light.png')
    } else {
        avatar.setAttribute('src','./assets/assets/avatar.png')
    }
}