
class Enemy{

    constructor (x, y, w, h){

        this.object=createSprite(x, y, w, h)
        this.object.addImage(bigEnemyImg);
        this.object.scale=.3;
        /*
        1 - going down- 4 frames
        2 - pause - 2 frames
        -1 - going up - 4 frames
        */
        this.hover = 1; 
        this.hit=10;
    }

    move() {
       
        if(this.hover === 1){

            if(i < 5){
                this.object.y=this.object.y+0.4;
                i++;
            }
            else if(i>=5 && i<=5.5){
                this.hover=1;
                i++;
            }
            else{
                i=0;
                this.hover=2
            }
           
        }
        
        else if(this.hover === 2){
            if(i < 5){
                this.object.y=this.object.y-0.4;
                i++;
            }
            else if(i>=5 && i<=5.5){
                this.hover=2;
                i++;
            }
            else{
                i=0;
                this.hover=1
            }
        }
        
    }

    dead(){
        //console.log(this.hit);
        for(var i=0; i<cannonGroup.length; i++){
            if(cannonGroup.get(i).isTouching(this.object)){
                cannonGroup.get(i).destroy();
                this.hit--;
            }
        }

        if(this.hit<1){
            this.object.destroy();
            /*
            tint();
            image(bigEnemyImg, X, Y, W, H);
            X = X -5;
            Y = Y + 5;
            */
        }
    }
}