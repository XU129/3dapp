//Load different 3D models
document.addEventListener('DOMContentLoaded', function() {

	var galleryCells = document.querySelectorAll('.gallery td');
	for (var i = 0; i < galleryCells.length; i++) {
	  galleryCells[i].addEventListener('click', function() {
		var file = this.getAttribute('file');
		
		var inlineBox = document.getElementById('inlineBox');
		if (file !== inlineBox.getAttribute('url')) {
		  inlineBox.setAttribute('url', file);
		}
	  });
	}
  });
  
//Lights control
var slider = document.getElementById("slider");
var switchElem = document.getElementById("switch");

slider.addEventListener("input", function() {
	if (slider.value == "1") {
		switchElem.checked = true;
	} else {
		switchElem.checked = false;
	}
});

function headlight()
{
	 var h = document.getElementById("head");
	if(h.getAttribute('headlight')=='true')
	  h.setAttribute('headlight', 'false');
	else
		h.setAttribute('headlight', 'true');
}

function lightSwitch(id){
	var light = document.getElementById(id);
	if(light.getAttribute('on')!='TRUE')
	   light.setAttribute('on','TRUE');
	else
		light.setAttribute('on','FALSE');
}

//Toggles
function toggleWireframe() {
	var x3d = document.getElementsByTagName("x3d")[0];
	var runtime = x3d.runtime;
	runtime.togglePoints(true);
}

//Change backgroud color
function changeBackgroundColor() {
	var r = document.getElementById("r").value;
	var g = document.getElementById("g").value;
	var b = document.getElementById("b").value;
	var bgColor = "rgb(" + r + "," + g + "," + b + ")";
	var canvas = document.getElementsByTagName("canvas")[0];
	canvas.style.backgroundColor = bgColor;
}