function insert(paramsBackground, paramsFavicon) {

    document.querySelector('body').style.background = paramsBackground
    document.getElementById('span').style.color = paramsBackground

    console.log(`/image/favicon-${paramsFavicon}.ico`)
    
    document.querySelector("link[rel='shortcut icon']").setAttribute("href",`/image/favicon-${paramsFavicon}.ico`);
    
}