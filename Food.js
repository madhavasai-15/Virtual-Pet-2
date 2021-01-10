class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0;
        this.lastFed;
    }

    getFoodStock(){
        return this.foodStock;

        /*
        db.ref('/').on("value", function(data){
            foodStock = data.val();
        });
        */
    }

    updateFoodStock(count){
        this.foodStock = count;
    }

    display(){
        var x = 80;
        var y = 100;

        imageMode(CENTER);
        image(this.image, 120, 220, 70, 70);

        if(this.foodStock !== 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i % 10 === 0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}