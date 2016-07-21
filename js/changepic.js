// function could be used when you want to load multi function on onload event
function addLoadEvent(func){
	var oldload = window.onload;
	if(typeof oldload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldload();
			func();
		}
	}
}

//whichpic represent a element node
function showPic(whichpic){
	if(document.getElementById("description")){
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	return true;
}

// attach a function to the onload event
window.onload = preparePics();
function preparePics(){
if(!document.getElementsByTagName||!document.getElementById) return false;
if(!document.getElementById("imagegallery")) return false;
var gallery = document.getElementById("imagegallery");
var links = gallery.getElementsByTagName("a");
for(var i=0;i<links.length;i++){
	links[i].onclick = function(){  //anonymous function
		return !showPic(this);;
		}
 }
}


