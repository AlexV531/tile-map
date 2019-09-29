export default class TileMap {

	constructor(tileSize, map, images) {
		this.tileSize = tileSize
		this.map = map
		this.images = images
	}

	render(context) {
		for(let y = 0; y < this.map.rows; y++) {
			for(let x = 0; x < this.map.cols; x++) {
				// Multi dimentional example:
				// const tileID = this.map.data[y][x]
				const tileID = this.map.data[x+y*this.map.rows]
				context.drawImage(
					this.images[tileID], x, y, this.tileSize, this.tileSize
				)
			}
		}
	}

	idAtPosition(x, y) {
		if(x < 0 || x > this.tileSize * this.map.rows) {
			return undefined
		}
		if(y < 0 || y > this.tileSize * this.map.cols) {
			return undefined
		}
		const xIndex = Math.floor(x / this.tileSize)
		const yIndex = Math.floor(y / this.tileSize)
		return this.map.data[xIndex+yIndex*this.map.rows]
	}
}