function insert(paramsBackground, paramsFavicon) {

    document.querySelector('body').style.background = paramsBackground
    document.getElementById('span').style.color = paramsBackground

    document.getElementById('fas').style.background = paramsBackground
    
    document.querySelector("link[rel='shortcut icon']").setAttribute("href",`image/favicon-${paramsFavicon}.ico`);
    
}
