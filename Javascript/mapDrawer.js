var canvas=document.getElementById('canvas')
var context=canvas.getContext('2D')

var grass = new Image()
grass.src="Pics/grass.png";



var mapOrganized = map.split(";");
var mapSuperOrganized = new Array();

for(var i = 0; i<mapOrganized.length; i++){
	mapSuperOrganized.push(mapOrganized[i].split(","));
}

function getTerrain(x,y){
	return mapSuperOrganized[x][y];
}
