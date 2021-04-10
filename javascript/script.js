function insert(paramsBackground, paramsFavicon) {

    document.querySelector('body').style.background = paramsBackground
    document.getElementById('span').style.color = paramsBackground

    const favicon = document.getElementById('favicon')
    
    favicon.setAttribute("href", `../image/favicon-${paramsFavicon}.png`)
    
}