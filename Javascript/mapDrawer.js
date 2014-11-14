var canvas=document.getElementById('canvas')
var context=canvas.getContext('2D')

var grass = new Image()
grass.src="Pics/grass.png";

var mapOrganized = map.split(";");
var mapSuperOrganized = new Array();

for(var i = 0; i<mapOrganized.length; i++){
	mapSuperOrganized.push(mapOrganized[i].split(","));
}

function getTile(x,y){
	return mapSuperOrganized[x][y];
} 

function blocks2pixels (blocks){
	return block*16;
}
function pixels2blocks (pixels){
	return block/16;
}
function drawTile(image, x, y){
	context.drawImage(image, x, y, image.width.image.height);
}

function drawTerrain(level){
	for(var i = 0; i < level.length; i++){
		for(var ii = 0; ii < level[i].length; i++){
			var img = new Image();
			if(tile[i][ii] == "grass"){
				img = grass;
			}
			drawTile(img, i, ii);
		}
	}
}
