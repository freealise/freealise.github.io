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

function loadSharing() {
  document.getElementById('share-controls').innerHTML = "<div id='share-buttons'>" +
    "<a class='facebook' href='http://www.facebook.com/share.php?u=" + document.location.href.split("?")[0] + "&hashtag=%23" + document.querySelector(".labels").innerText.split(": ")[1].split(" ")[0] + "' target='_blank' title='Share this on Facebook'><svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z'/></svg></a>" +
    "<a class='twitter' href='http://twitter.com/home?status=" + document.querySelector(".article-header").innerText + "&url=" + document.location.href.split("?")[0] + "&hashtags=" + document.querySelector(".labels").innerText.split(": ")[1].replace(/ /g, ", ") + "' target='_blank' title='Share this on Twitter'><svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z'/></svg></a>" +
    "<a class='linkedin' href='https://www.linkedin.com/shareArticle?mini=true&url=" + document.location.href.split("?")[0] + "&title=" + document.querySelector(".article-header").innerText + "&summary=&source=' target='_blank' title='Share this on Linkedin'><svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z'/></svg></a>" +
    "<a class='mail' href='mailto:?&subject=" + document.querySelector(".article-header").innerText + "&body=" + document.location.href.split("?")[0] + "' target='_blank' title='Share this through Email'><svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'/></svg></a>" +
  "</div>";
}
loadSharing();
