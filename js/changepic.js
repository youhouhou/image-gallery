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

function insertAfter(newElement,target){
	var parent = target.parentNode;
	if(parent.lastChild == target){
		parent.appendChild(newElement);
	}
	parent.insertBefore(newElement,target.nextSibling);
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

//create the image holder element
function preparePlaceholder(){
if (!document.createElement) return false;
if (!document.createTextNode) return false;
if (!document.getElementById) return false;
var placeholder = document.createElement("img");
placeholder.setAttribute("id","placeholder");
placeholder.setAttribute("src","images/placeholder3.png");
placeholder.setAttribute("alt","my image gallery");
//create text node under the image
var description = document.createElement("p");
description.setAttribute("id","description");
var desctext = document.createTextNode("Choose a image");
description.appendChild(desctext);

var gallery = document.getElementById("imagegallery");
insertAfter(placeholder,gallery);
insertAfter(description,placeholder);
}



// attach a function to the onload event
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

addLoadEvent(preparePlaceholder);
addLoadEvent(preparePics);




