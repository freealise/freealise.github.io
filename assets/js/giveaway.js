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
      for (i=0;i<JSON.parse(this.responseText).rows.length;i++) {
        var row = JSON.parse(this.responseText).rows[i];
        if (row[1] != "") {row[1] = "<br/>" + row[1];}
        if (row[2] != "") {row[2] = "<br/>" + row[2];}
        if (row[4] != 'undefined') {row[4] = "<br/>" + row[4];} else {row[4]='';}
      	queue += "<p>" + row[0] + " £" + row[5] + row[1] + row[2] + row[4] + "</p>";
      }
      document.getElementById("queue").innerHTML = queue;
    }
  };
  xhttp.open("GET", "https://script.google.com/macros/s/AKfycby9VN3ghF35t1Z4csV9kycvQyBqiYF8irms_ybLMmsZrKFlU9rb/exec?a=queue", true);
  xhttp.send();
}
