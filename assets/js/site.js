function subscribeEmail(address, s) {
  var un = "";
  if (s === false) {
    un = "un";
  }
  var at = address.indexOf('@');
  var dot = address.indexOf('.')+1;
  if (at > 0 && dot > at && address.length > (dot+1)) {
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
  var sdot = _site.indexOf('.')+1;
  if (at > 0 && dot > at && _email.length > (dot+1) && sdot > 0 && _site.length > (sdot+1)) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact-form-sent").innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbz5br4wnfSGtucWKwGQq1Tb07eshJez6uVaFatn4xJAc_rcrcA/exec?a=contact&name='+encodeURIComponent(_name)+'&site='+encodeURIComponent(_site)+'&email='+encodeURIComponent(_email)+'&subj='+encodeURIComponent(_subject)+'&msg='+encodeURIComponent(_message)+'&token='+token, true);
    xhttp.send();
  } else {
    document.getElementById("contact-form-sent").innerHTML = "Please complete the empty fields :)";
  }
}

function highlightEmail() {
  document.getElementById('email').focus();
}

function showMsg() {
  var msg = document.getElementById('msg');
  if (msg.style.display != 'block') {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
}

function selectMedium() {
    if (idx < ln-1) {
        mdm.scrollBy(0,mdm.scrollHeight/ln);
        idx++;
    } else {
        mdm.scrollTo(0,0);
        idx=0;
    }
}

function scrollMedium() {
  intv = setInterval(selectMedium, 2000);
}

function toggleMedium() {
  clearInterval(intv);
  selectMedium();
}
