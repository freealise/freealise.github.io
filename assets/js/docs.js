
function getComments(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementsByTagName("pre")[0].innerHTML = '<!--' + xhttp.responseText.replace(/\/\*/gi, '--><b>').replace(/\*\//gi, '</b><!--').replace(/\/\/.+\n/gi, function(x){
         return '--><b>' + x.slice(2,-1) + '</b>\n<!--';
       }) + '-->';
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}

//getComments("https://freeali.se/freealise/hsv2rgb.js");