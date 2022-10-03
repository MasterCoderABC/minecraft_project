var canvas = new fabric.Canvas('myCanvas');

var player_x = 10;
var player_y = 10;

var block_image_width = 30;
var block_image_height = 30;

var player_object = "";
var block_image_object = "";

function playerUpdate(){
   fabric.image.fromUrl("player.png", function(img){
     player_object = img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({
        top:player_y,
        left:player_x
     });
     canvas.add(player_object);
   });    
}

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) { 
   block_image_object = Img; 
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height); 
   block_image_object.set({ top:player_y, left:player_x }); 
   canvas.add(block_image_object); 
});
 }

 window.addEventListener("keydown", my_keydown)

 function my_keydown(e){
   var keyPressed = e.keyCode;
   console.log(keyPressed);

   if(e.shiftKey == true && keyPressed == '80') {
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10; 
    block_image_height = block_image_height + 10; 
    document.getElementById("current_width").innerHTML = block_image_width; 
    document.getElementById("current_height").innerHTML = block_image_height; 
   }
   if(e.shiftKey == true && keyPressed == '77'){
      console.log("shift + M");
      block_image_width = block_image_width - 10;
      block_image_height = block_image_height - 10;
      document.getElementById("current_width").innerHTML = block_image_width;
      document.getElementById("current_height").innerHTML = block_image_height;
   }

   if (keyPressed == '38'){
      up();
      console.log("up");
   }
   if (keyPressed == '40'){
      down();
      console.log("down");
   }
   if (keyPressed == '37'){
      left();
      console.log("left");
   }
   if (keyPressed == '39'){
      right();
      console.log("right");
   }
   if (keyPressed == '87'){
      newImage('wall.jpg');
      console.log("w");
   }
   if (keyPressed == '71'){
      newImage('ground.png');
      console.log("g");
   }
   if (keyPressed == '76'){
      newImage('light_green.png');
      console.log("l");
   }
   if (keyPressed == '84'){
      newImage('trunk.jpg');
      console.log("t");
   }
   if (keyPressed == '82'){
      newImage('roof.jpg');
      console.log("r");
   }
   if (keyPressed == '89'){
      newImage('yellow_wall.png');
      console.log("y");
   }
   if (keyPressed == '68'){
      newImage('dark_green.png');
      console.log("d");
   }
   if (keyPressed == '85'){
      newImage('unique.png');
      console.log("u");
   }
   if (keyPressed == '67'){
      newImage('cloud.jpg');
      console.log("c");
   }
 }