class Food{
    constructor(foodStock, lastFed){
        this.image = loadImage("images/Milk.png");
        this.foodStock = foodStock;
        this.lastFed = lastFed;
    }

    getFoodStock(){
        db.ref('/').on("value", function(data){
            foodStock = data.val();
        });
    }

    updateFoodStock(count){
        db.ref("/").update({
            Food: count
        });
    }

    display(){
        var x = 80;
        var y = 100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.foodStock!=0){
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