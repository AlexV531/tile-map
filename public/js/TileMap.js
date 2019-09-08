export default class TileMap {

    constructor(tileSize, map, images){
        this.tileSize = tileSize
        this.map = map
        this.images = images
    }

    render(context){
        for(let y = 0; y < this.map.rows; y++){
            for(let x = 0; x < this.map.cols; x++){
                const tileID = this.map.data[x+y*this.map.rows]
                context.drawImage(
                    this.images[tileID], x, y, this.tileSize, this.tileSize
                )
            }
        }
    }
}