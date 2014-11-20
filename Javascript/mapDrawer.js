var canvas=document.getElementById('canvas')
var context=canvas.getContext('2d')

var grass = new Image()
grass.src="Pics/grass.png";

var sand = new Image()
sand.src="Pics/sand.png";

var mapOrganized = map.split(";");
var mapSuperOrganized = new Array();

for(var i = 0; i<mapOrganized.length; i++){
	mapSuperOrganized.push(mapOrganized[i].split(","));
}

function getTile(x,y){
	return mapSuperOrganized[y][x];
} 

function blocks2pixels (blocks){
	return block*16;
}
function pixels2blocks (pixels){
	return block/16;
}
function drawTile(image, y, x){
	context.drawImage(image, 16*x, 16*y, image.width,image.height);
}

function drawTerrain(level){
	for(var i = 0; i < level.length; i++){
		for(var ii = 0; ii < level[i].length; ii++){
			var img = new Image();
			if(level[i][ii] == "grass"){
				img = grass;
			}
			if(level[i][ii] == "sand"){
				img = sand;
			}
			drawTile(img, i, ii);
			if(level[i][ii] == ""){
				img = ;
			}
		}
	}
}

document.onKeyDown = drawTerrain(mapSuperOrganized);