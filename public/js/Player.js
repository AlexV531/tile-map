const SPEED = 2 
const FRAME = {width:80, height:104}
const NUMCELLS = 4

export default class Player {

    constructor(image){

        this.image = image
        this.position = {x:0, y:0}
        this.velocity = {x:0, y:0}
        this.time = 0
        this.inputs = {
            left:0, right:0, up:0, down:0
        }
    }

    update(deltaT){
        if(this.inputs.left > 0){
            this.velocity.x = -SPEED
        } else if (this.inputs.right > 0){
            this.velocity.x = SPEED
        } else {
            this.velocity.x = 0
        }
        if(this.inputs.up > 0){
            this.velocity.y = SPEED 
        } else if(this.inputs.down > 0){
            this.velocity.y = -SPEED
        } else {
            this.velocity.y = 0
        }
        const fT = deltaT/1000
        

	    this.position.x += this.velocity.x * fT
	    this.position.y += this.velocity.y * fT
        this.time += deltaT

    }

    render(context){ 
        // Default resting cell
        let animationRow = 3
        let animationCell = 1
        // If character is moving, select correct animation 
        if(this.velocity.x > 0){
            animationRow = 2
        } else if(this.velocity.x < 0){
            animationRow = 1
        } else if(this.velocity.y > 0){
            animationRow = 0
        } else if(this.velocity.y < 0){
            animationRow = 3
        }
        if(this.velocity.x != 0 || this.velocity.y != 0){
            // Compute animation cell when character is moving
            animationCell = Math.floor(this.time / 250) % NUMCELLS
        }
        context.drawImage(
            this.image, animationCell*FRAME.width, animationRow*FRAME.height, FRAME.width, FRAME.height, 
            this.position.x, this.position.y, 1, FRAME.height/FRAME.width
        )
    }



}