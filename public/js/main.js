import {loadAssets} from "./assets.js"
import TileMap from "./TileMap.js"
import Player from "./Player.js"

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('canvas.main-canvas')
/** Drawing Context */
const context = canvas.getContext('2d')
/** Size of our drawing area */
const viewport = {
	width: 320, height: 240 // These will be determined later..
}

/** Scene scaling */
const SCALE = 0.1
/** Background */
const BG_COLOR = '#FFFF00'
let prevT = Date.now()

let tileMap
let spriteSheet
let player

/** Handles initial canvas sizing, and all resizing thereafter */
function resize() {
	// Whenever the window is resized we need to update
	// the canvas resolution.
	const rc = canvas.getBoundingClientRect()
	canvas.width = viewport.width = rc.width
	canvas.height = viewport.height = rc.height
	render()
}

/** @param {KeyboardEvent} e */
function handleKeyDown(e) {
	const code = e.keyCode 
	if(code === 38){
		player.inputs.up = 1
	} else if (code === 40){
		player.inputs.down = 1
	} else if (code === 37){
		player.inputs.left = 1
	} else if (code === 39){
		player.inputs.right = 1
	}

} 

/** @param {KeyboardEvent} e */
function handleKeyUp(e) {
	const code = e.keyCode 
	if(code === 38){
		player.inputs.up = 0
	} else if (code === 40){
		player.inputs.down = 0
	} else if (code === 37){
		player.inputs.left = 0
	} else if (code === 39){
		player.inputs.right = 0
	}

} 

/** Call this once on application startup */
async function initApp() {
	// Listen for window resize events
	window.addEventListener('resize', resize)
	window.addEventListener('keydown', handleKeyDown)
	window.addEventListener('keyup', handleKeyUp)
	//resize()
	const assets = await loadAssets()
	tileMap = new TileMap(1, assets.maps[0], assets.images)
	spriteSheet = assets.spriteSheet
	player = new Player(spriteSheet)
}

/** Render the scene */
function render() {
	// Clear the screen
	context.beginPath()
	context.fillStyle = BG_COLOR
	context.fillRect(0, 0, viewport.width, viewport.height)

	// Set up a cartesian-style coordinate system with 0,0
	// at the centre of the screen, and Y axis up.
	context.save()
	context.translate(viewport.width / 2, viewport.height / 2)
	context.scale(viewport.width * SCALE, -viewport.width * SCALE)
	// Move camera with player
	context.translate(-player.position.x, -player.position.y)
	tileMap.render(context)

	// Draw the player
	player.render(context)

	context.restore()
}

//start animation loop
function update() {
	const curT = Date.now()
	const deltaT = curT - prevT
	const fT = deltaT/1000

	player.update(deltaT)

	prevT = curT
	render()
	requestAnimationFrame(update)
}

initApp().then(() => {
	resize()
	console.log('Starting animation loop')
	requestAnimationFrame(update)
})
