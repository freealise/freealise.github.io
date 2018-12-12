var q_opened = false;

function openQueue() {
    q_opened = true;
    document.getElementById('queue').style.display='block';
}

function closeQueue() {
    q_opened = false;
    document.getElementById('queue').style.display='none';
}

function getSum() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var sum = this.responseText;
      document.getElementById('amountGiven').innerText="$"+sum;
      var amountNeeded = document.getElementById('amountNeeded').innerText.slice(1);
      document.getElementById('giveBar').style.width=sum/amountNeeded*100+'%';
    }
  };
  xhttp.open("GET", "https://script.google.com/macros/s/AKfycby9VN3ghF35t1Z4csV9kycvQyBqiYF8irms_ybLMmsZrKFlU9rb/exec?a=balance", true);
  xhttp.send();
}

function queue() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //document.getElementById("queue").innerHTML = this.responseText + "<br/><br/>";
      var queue = "";
      var values, currency;
      var rows = this.responseText.split("\r\n");
      for (i=0;i<rows.length;i++) {
        if (rows[i]!="") {
            values = rows[i].split(", ");
            if (values[0]=="usd") {
                currency="$ ";
            } else if (values[0]=="eur") {
                currency="€ ";
            } else if (values[0]=="gbp") {
                currency="£ ";
            } else {
                currency=values[0]+" ";
            }
            queue += "<p>" + currency + values[1] + "</p>";
        }
      }
      document.getElementById("queue").innerHTML = queue;
    }
  };
  xhttp.open("GET", "https://script.google.com/macros/s/AKfycby9VN3ghF35t1Z4csV9kycvQyBqiYF8irms_ybLMmsZrKFlU9rb/exec?a=queue", true);
  xhttp.send();
}
