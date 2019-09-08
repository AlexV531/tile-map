
const imageList = [
    "img/tiles/grass.jpg", 
    "img/tiles/stones.jpg", 
    "img/tiles/dirt.jpg"
]

export function loadAssets() {
    return Promise.all(
        imageList.map(loadImage)
    )
}

/** @returns {Promise<HTMLImageElement>} */
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () =>{
            resolve(image)
        }
        image.src = url
    })
}

var tiles = `
00000000000000
00111000000000
`