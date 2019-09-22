
const imageList = [
    "img/tiles/grass.jpg", 
    "img/tiles/stones.jpg", 
    "img/tiles/dirt.jpg"
]

export async function loadAssets() {
    const images = await Promise.all(
        imageList.map(loadImage)
    )
    const spriteSheet = await loadImage("img/sprites/character-flipped.png")
    return {
        images, maps:[parseMap(map01)], spriteSheet
    }
}

function parseMap(raw) {
    raw = raw.trim()
    const strRows = raw.split("\n")
    const rows = strRows.length
    const cols = strRows[0].trim().length
    const data = []
    for(let r = rows -1; r >= 0; r--){
        const row = strRows[r].trim()
        if(row.length != cols){
            throw new Error("map rows must all have the same number of columns") 
        }
        for(let c = 0; c < rows; c++){
            const asciiCode = row.charCodeAt(c)
            const tileID = asciiCode - 48 
            data.push(tileID)
        }
    }
    return {data, rows, cols}
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

const map01 = `
002220000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
002220000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
002220000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
002220000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
002220000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
002220000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
002220000000000000000000000000
021112000000000000000000000000
021112000000000000000000000000
021112000000000110000000000000
021112000000000110000000000000
021112000000000000000000000000
021112000001111111111111000000
`