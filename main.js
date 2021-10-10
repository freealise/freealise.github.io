        function subscribeEmail(address, s) {
          if (s === true) {
            var un = "";
          } else {
            var un = "un";
          }
          var at = address.indexOf('@');
          var dot = address.indexOf('.')+1;
          if (at > 0 && dot > at && address.length > dot) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                document.getElementById('subscribe-form').innerHTML =
                this.responseText;
              }
            };
            xhttp.open('GET', 'https://script.google.com/macros/s/AKfycbz5br4wnfSGtucWKwGQq1Tb07eshJez6uVaFatn4xJAc_rcrcA/exec?a='+un+'subscribe&email='+address, true);
            xhttp.send();
          }
        }
