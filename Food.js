class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 3;
        this.lastFed;
    };

    getFoodStock(){
        return this.foodStock;
    };

    updateFoodStock(count){
        this.foodStock = count;
    };

    display(){
        var x = 80;
        var y = 100;

        imageMode(CENTER);
        
        if(this.foodStock !== 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i % 10 === 0){
                    x = 80;
                    y = y + 50;
                    console.log(this.foodStock, foodS);
                }
                image(this.image, x, y, 100, 100);
                x = x + 30;
            }
        }
    };
}