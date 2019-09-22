const SPEED = 2 

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
        context.drawImage(
            this.image, 0, 0, 80, 100, 
            this.position.x, this.position.y, 1, 1.25
        )
    }

}