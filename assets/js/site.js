function subscribeEmail(address, s) {
  var un = "";
  if (s === false) {
    un = "un";
  }
  var at = address.indexOf('@');
  var dot = address.indexOf('.')+1;
  if (at > 0 && dot > at && address.length > dot) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('subscribe-form').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbz5br4wnfSGtucWKwGQq1Tb07eshJez6uVaFatn4xJAc_rcrcA/exec?a='+un+'subscribe&email='+encodeURIComponent(address), true);
    xhttp.send();
  }
}

function sendEmail() {
  var _name = document.getElementById("contact-form-name").value;
  var _email = document.getElementById("contact-form-email").value;
  var _message = document.getElementById("contact-form-email-message").value;
  var at = _email.indexOf('@');
  var dot = _email.indexOf('.')+1;
  if (at > 0 && dot > at && _email.length > dot) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var _response = JSON.parse(this.responseText);
        if (_response.details.emailSentStatus == "true") {
          document.getElementById("contact-form-sent").innerHTML = "Your message has been sent";
        } else {
          document.getElementById("contact-form-sent").innerHTML = "Could not send your message because of error:<br/>" + this.responseText;
        }
      }
    };
    xhttp.open("POST", "https://www.blogger.com/contact-form.do?name="+encodeURIComponent(_name)+"&email="+encodeURIComponent(_email)+"&message="+encodeURIComponent(_message)+"&blogID=5409931531965752101", true);
    xhttp.send();
  }
}

	function highlightEmail() {
	 document.getElementById('email').focus();
	}
