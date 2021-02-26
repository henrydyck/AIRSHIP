
class Player {

    constructor(){
        this.object=createSprite(85, height/4-8, 30, 30);
        //this.object.addImage(playerImg);
        this.object2=createSprite(30 ,height/4+40, 30, 30);
    }

    move(){
        if (keyIsDown(UP_ARROW)) {
            this.object.y=this.object.y-4;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.object.y=this.object.y+4;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.object.x=this.object.x+4;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.object.x=this.object.x-4;
        }

        this.object2.x=this.object.x-55;
        this.object2.y=this.object.y+48;
    }

    
}