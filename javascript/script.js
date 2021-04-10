function start() {

    construirTabela()

}

function construirTabela() {

    let width = 10
    let height = 10

    let main = document.getElementById('main')

    main.style.gridTemplateColumns = `repeat(${height}, 1fr)`
    main.style.gridTemplateRows = `repeat(${width}, 1fr)`

    main.style.width = `${50 * width}px`
    main.style.height = `${50 * height}px`

    for (let index_width = 0; index_width < width; index_width++) {

        for (let index_height = 0; index_height < height; index_height++) {

            let p = document.createElement('p')

            p.classList.add('p')

            main.appendChild(p)

            p.style.background = "gray"

        }

    }

}
