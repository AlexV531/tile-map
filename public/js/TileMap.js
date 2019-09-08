export default class TileMap {

    constructor(tileSize, mapSize, images){
        this.tileSize = tileSize
        this.mapSize = {width:mapSize.width, height:mapSize.height}
        this.images = images
    }

    render(context){
        for(let y = -10; y < 20; y++){
            for(let x = -10; x < 20; x++){
            
                context.drawImage(
                    this.images[1], x, y, this.tileSize, this.tileSize
                )
            }
        }
    }
}