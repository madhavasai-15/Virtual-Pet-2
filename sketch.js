var dog, dogImage, happydogImage, foodS, foodStock;;
var db;
var feed, addFood;
var fedTIme, lastFed;
var foodObj;

function preload(){
  dogImage = loadImage("images/Dog.png");
  happydogImage = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  
  db = firebase.database();

  dog = createSprite(400, 300, 10, 10);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  foodStock = db.ref("Food");
  foodStock.on("value", readStock);

  foodObj = new Food();

  feed = createButton("feed");
  feed.position(700, 80);
  feed.mousePressed(feedDog);
  addFood = createButton("add food");
  addFood.position(760, 80);
  addFood.mousePressed(addFoods);
}


function draw() {  
  background(46, 139, 87);

  fedTIme = db.ref("FeedTime");
  fedTIme.on("value", function(data){
    lastFed = data.val();
  });

  foodObj.display();

  drawSprites();
  fill(255, 255, 254);
  textSize(15);
  if(lastFed >= 12){
    text("Last Feed : " + lastFed%12 + "PM", 150, 30);
  }else if(lastFed === 0){
    text("Last Feed : 12 AM", 150, 30);
  }else {
    text("Last Feed :"+ lastFed +"AM", 150, 30);
  }
}

function feedDog(){
  dog.addImage(happydogImage);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);


  db.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime: hour()
  });
}

function addFoods(){
  foodS++;
  db.ref('/').update({
    Food: foodS
  });
}


function readStock(data){
  foodS = data.val();
}