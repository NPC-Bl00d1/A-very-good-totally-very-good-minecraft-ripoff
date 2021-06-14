var canvas = new fabric.Canvas('myCanvas');

var block_width = 30;
var block_height = 30;
var player_x = 10;
var player_y = 10;

var player_object = "";
var block_object = "";


function player_update(){

fabric.Image.fromURL("Steve..png", function(Img){

    player_object = Img; 
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top: player_y, 
    left: player_x
    });

    canvas.add(player_object);

});

}

function new_image(get_image){

fabric.Image.fromURL(get_image, function(Img){

block_object = Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({

top: player_y,
left: player_x

});

canvas.add(block_object);

});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){

keypressed = e.keyCode;
console.log("keypressed has gotten the keyCode");

if(e.shiftKey == true && keypressed == '80'){
console.log("p and shift pressed, comence opperation increase variables");

block_height = block_height + 10;
block_width = block_width + 10;

document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;

}

if(e.shiftKey == true && keypressed == '77'){
console.log("m and shift pressed. We Must draw back, many forces were lost, commnece opperation decrease variables")

block_width = block_width - 10;
block_height = block_height - 10;

document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;

}

if(keypressed == '37'){
    left();
    console.log("left key has been pressed");
}

if(keypressed == '38'){
    up();
    console.log("up arrow pressed");
}

if(keypressed == '39'){
   right();
   console.log("right arrow pressed");

}

if(keypressed == '40'){
    down();
    console.log("down arrow pressed");
}

if(keypressed == '87'){
    new_image("wall.jpg");
    console.log("wall");
}

if(keypressed == '71'){
    new_image("ground.png");
    console.log("dirt");
}

if(keypressed == '76'){
    new_image("light_green.png");
    console.log("Light green grass");
}

if(keypressed == '84'){
    new_image("trunk.jpg");
    console.log("wood block");
}

if( keypressed == '82'){
    new_image("roof.jpg");
    console.log("pre-retextured netherite i think");
}

if(keypressed == '89'){
    new_image("yellow_wall.png");
    console.log("yellow wall that is probably from some mod pack");
}

if(keypressed == '68'){
    new_image("dark_green.png");
    console.log("Dark Green Grass aka Swamp Grass");
}

if(keypressed == '67'){
    new_image("cloud.jpg");
    console.log("stone block");
}

if(keypressed == '85'){
    new_image("unique.png");
    console.log("glowstone");
}

if(keypressed == '70'){
    new_image("torch.png");
    console.log("torch");
}

}

function left(){

if(player_x >= 0){
    

    player_x = player_x - 10;

canvas.remove(player_object)


    player_update();

    console.log("block image width = " + block_width);
    console.log("when left arrow is pressed: x = " + player_x + " y = " + player_y);

}

}

function right(){

if(player_x <= 750){

player_x = player_x + 10;

canvas.remove(player_object);

player_update();

console.log("block width = " + block_width);
console.log("when right arrow is pressed: x = " + player_x + " y = " + player_y);

}

}

function up(){

if(player_y >= 0){

player_y = player_y - 10;

canvas.remove(player_object);

player_update();

console.log("block width = " + block_width);
console.log("when up arrow is pressed: x = " + player_x + " y = " + player_y);

}

}

function down(){

if(player_y <= 450){

    player_y = player_y + 10;

    canvas.remove(player_object);

    player_update();

    console.log("block width = " + block_width);
    console.log("when down arrow is pressed: x = " + player_x + " y = " + player_y);
}

}