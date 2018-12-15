function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            c = c.substring(name.length, c.length);
            if (c && c != "undefined") {
              return c;
            }
        }
    }
    return "";
}

var email='0';
var token='0';
var url = window.location.href.split("?");
if (url[1]) {
  var params = url[1].split("&");
  if (params) {
    for (var i=0; i<params.length; i++) {
      if (params[i].split("=")[0] == "email") {email = params[i].split("=")[1];}
      if (params[i].split("=")[0] == "token") {token = params[i].split("=")[1];}
    }
  }
  if (email != '0' && token != '0') {
    if (email != "" && token != "") {
      setCookie("email", email, 365);
      setCookie("token", token, 365);
      
	  document.getElementById('email').value=email;
	  document.getElementById('token').value=token;
    } else if (email == "" && token == "") {
      setCookie("email", "", -1);
      setCookie("token", "", -1);
      
	  document.getElementById('email').value='';
	  document.getElementById('token').value='';
    }
  }
}

var email=getCookie("email");
var token=getCookie("token");
