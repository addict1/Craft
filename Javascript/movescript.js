var abraham=document.getElementById('roy');
var container=document.getElementById('container');

var guyLeft = 0;
var guyRight = 0;

function animate(e){

if(e.keyCode == 39){
	guyLeft +=2;
	guy.style.left = guyLeft + 'px';
	if(guyLeft >= 1366){
		guy.style.left -=2;
	}
}

if(e.keyCode == 37){
	guyRight += 2;
	guy.style.right = guyRight + 'px';
	if(guyRight <= 0){
		guy.style.right -=2;
	}
}

}