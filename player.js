
class Player {

    constructor(){
        this.object=createSprite(240, height/4-8, 30, 30);
        //this.object.addImage(playerImg);
        this.object2=createSprite(30 ,height/4+80, 30, 30);
        this.object2.addImage(cargoImg);
        this.object2.scale = 0.4;
        this.hover=1;
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

        this.object2.x=this.object.x-95;
        this.object2.y=this.object.y+128;

        //HOVER
        

        if(this.hover === 1){

            if(j < 6){
                this.object.y=this.object.y+0.4;
                j++;
            }
            else if(j>=6 && j<=6.5){
                this.hover=1;
                j++;
            }
            else{
                j=0;
                this.hover=2
            }
           
        }
        
        else if(this.hover === 2){
            if(j < 6){
                this.object.y=this.object.y-0.4;
                j++;
            }
            else if(j>=6 && j<=6.5){
                this.hover=2;
                j++;
            }
            else{
                j=0;
                this.hover=1
            }
        }
    }

    attack(){
        //SHOOT
        if (keyWentDown("space")){
            var cannon=createSprite(this.object.x+60, this.object.y +90, 10, 10)
            cannon.velocityX=18; 
            cannonGroup.add(cannon);
            cannon.lifetime=200;
        }

    }

    
}