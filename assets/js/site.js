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

function sendEmail(token) {
  var _name = document.getElementById("contact-form-name").value;
  var _site = document.getElementById("contact-form-site").value;
  var _email = document.getElementById("contact-form-email").value;
  var _subject = document.getElementById("contact-form-subject").value;
  var _message = document.getElementById("contact-form-email-message").value;
  var at = _email.indexOf('@');
  var dot = _email.indexOf('.')+1;
  if (at > 0 && dot > at && _email.length > dot) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact-form-sent").innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbz5br4wnfSGtucWKwGQq1Tb07eshJez6uVaFatn4xJAc_rcrcA/exec?a=contact&name='+encodeURIComponent(_name)+'&site='+encodeURIComponent(_site)+'&email='+encodeURIComponent(_email)+'&subj='+encodeURIComponent(_subject)+'&msg='+encodeURIComponent(_message)+'&token='+token, true);
    xhttp.send();
  }
}

function highlightEmail() {
  document.getElementById('email').focus();
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}
