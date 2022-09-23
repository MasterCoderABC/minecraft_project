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

function newImage(getImage){
    fabric.image.fromUrl(getImage, function(img){
      block_image_object = img;
      block_image_object.scaleToWidth(block_image_width);
      block_image_object.scaleToHeight(block_image_height);
      block_image_object.set({
         top:player_y,
         left:player_x
      });
      canvas.add(block_image_object);
    });
 }