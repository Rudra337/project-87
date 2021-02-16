var canvas = new fabric.Canvas('myCanvas');

superhero_x = 10;
superhero_y = 10;

super_image_width = 30;
super_image_height = 30;

var super_object= "";
var super_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	super_object = Img;

	super_object.scaleToWidth(150);
	super_object.scaleToHeight(140);
	super_object.set({
	top:superhero_y,
	left:superhero_x
	});
	canvas.add(super_object);

	});
}
player_update() ;

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	super_image_object = Img;

	super_image_object.scaleToWidth(super_image_width);
	super_image_object.scaleToHeight(super_image_height);
	super_image_object.set({
	top:superhero_y,
	left:superhero_x
	});
	canvas.add(super_image_object);

	});

}
function up()
{
	if(superhero_y >=0)
	{
		superhero_y = superhero_y - super_image_height;
		console.log("super image height = " + super_image_height);
		console.log("When Up arrow key is pressed, X =  " + superhero_x + " , Y = "+superhero_y);
		canvas.remove(super_object);
		player_update();
	}
}

function down()
{
	if(superhero_y <=500)
	{
		superhero_y = superhero_y + super_image_height;
		console.log("super image height = " + super_image_height);
		console.log("When Down arrow key is pressed, X =  " + superhero_x + " , Y = "+superhero_y);
		canvas.remove(super_object);
		player_update();
	}
}

function left()
{
	if(superhero_x >0)
	{
		superhero_x = superhero_x - super_image_width;
		console.log("super image width = " + super_image_width);
		console.log("When Left arrow key is pressed, X =  " + superhero_x + " , Y = "+superhero_y);
		canvas.remove(super_object);
		player_update();
	}
}

function right()
{
	if(superhero_x <=850)
	{
		superhero_x = superhero_x + super_image_width;
		console.log("super image width = " + super_image_width);
		console.log("When Right arrow key is pressed, X =  " + superhero_x + " , Y = "+superhero_y);
		canvas.remove(super_object);
		player_update();
	}
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	super_image_width = super_image_width + 10;
	super_image_height = super_image_height + 10;
	document.getElementById("current_width").innerHTML = super_image_width;
	document.getElementById("current_height").innerHTML = super_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	super_image_width = super_image_width - 10;
	super_image_height = super_image_height - 10;
	document.getElementById("current_width").innerHTML = super_image_width;
	document.getElementById("current_height").innerHTML = super_image_height;
}
if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '76')
	{
		new_image('spiderman_legs.png'); 
		console.log("l");
	}
	if(keyPressed == '70')
	{
		new_image('thor_face.png'); 
		console.log("f");
	}
	if(keyPressed == '66')
	{
		new_image('hulkd_body.png'); 
		console.log("b");
	}
	if(keyPressed == '82')
	{
		new_image('ironman_right_hand.png'); 
		console.log("r");
	}
	if(keyPressed == '72')
	{
		new_image('captain_america_left_hand.png'); 
		console.log("h");
	}
	
}
