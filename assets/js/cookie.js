function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getUserData() {
  var msg="";
  var email='undefined';
  var token='undefined';
  var url = window.location.href.split("?");
  if (url[1]) {
    var params = url[1].split("&");
    if (params) {
      for (var i=0; i<params.length; i++) {
        if (params[i].split("=")[0] == "msg" && document.getElementById("msg")) {
          msg = params[i].split("=")[1];
          document.getElementById("msg").innerHTML = msg.replace(/%20/g, " ");
        }
        if (params[i].split("=")[0] == "email") {email = params[i].split("=")[1];}
        if (params[i].split("=")[0] == "token") {token = params[i].split("=")[1];}
      }
    }
    if (email != 'undefined' && token != 'undefined') {
      if (email != "" && token != "") {
        setCookie("email", email, 365);
        setCookie("token", token, 365);
      } else if (email == "" && token == "") {
        setCookie("email", "", -1);
        setCookie("token", "", -1);
      }
    }
  }
}
