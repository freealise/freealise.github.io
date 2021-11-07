  var exec="https://script.google.com/macros/s/AKfycby9VN3ghF35t1Z4csV9kycvQyBqiYF8irms_ybLMmsZrKFlU9rb/exec";
  function showResults(a, map) {
    var url = exec+"?a="+a;
    var xhttp, xmlDoc, txt, x, i, point;
    var bounds = map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    var maxLat = ne.lat();
    var maxLng = ne.lng();
    var minLat = sw.lat();
    var minLng = sw.lng();
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           xmlDoc = xhttp.responseXML;
           txt = "<br/>";
           x = xmlDoc.getElementsByTagName("entry");
           for (i = 0; i < x.length; i++) {
             point = x[i].getElementsByTagName("georss:point")[0];
             if (point && point.innerHTML) {
               var coords = point.innerHTML.split(" ");
               var lat = parseFloat(coords[0]);
               var lng = parseFloat(coords[1]);
               if (lat>minLat && lat<maxLat && lng>minLng && lng<maxLng) {
                 var html = x[i].getElementsByTagName("content")[0].innerHTML;
                 html = html.replace(/&lt;/g, "<");
                 html = html.replace(/&gt;/g, ">");
                 html = html.replace(/&quot;/g, '"');
                 html = html.replace(/&apos;/g, "'");
                 txt += "<p/>" + x[i].getElementsByTagName("updated")[0].innerHTML.slice(0, 10) + "<br/><b>" + x[i].getElementsByTagName("title")[0].innerHTML + "</b><br/>";
                 txt += html + "</p>";  
               }
             }
           }
           document.getElementById("text").innerHTML = txt;
           //document.getElementsByTagName("section")[0].style.height="auto";
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
function initMap() {
  //geolocate
  var mapOptions = {
    center: {lat: 30.0000000, lng: -40.0000000},
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    fullscreenControl: false,
  }
  var mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d9d9d9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];
  var d = new Date();
  var t = d.getTime();
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  map.set('styles', mapStyles);
  var blogLayer = new google.maps.KmlLayer({
    preserveViewport: true,
    suppressInfoWindows: true,
    url: 'https://blog.freealise.com/feeds/posts/default/?time='+t
  });
  var flickrLayer = new google.maps.KmlLayer({
    preserveViewport: true,
    suppressInfoWindows: true,
    url: 'https://api.flickr.com/services/feeds/geo/?g=14657467@N21&lang=en-us&format=kml&time='+t
  });
  flickrLayer.setMap(map);
  var listener = google.maps.event.addListener(flickrLayer, 'metadata_changed', function() {
    google.maps.event.clearListeners(flickrLayer, 'metadata_changed');
    blogLayer.setMap(map);
  });

  google.maps.event.addListener(flickrLayer, 'click', function(e) {
    var zoom = map.getZoom();
    if (zoom<12) {
     map.setZoom(zoom+4);
    }
    map.setCenter(e.latLng);
    var a = "photos";
    showResults(a, map);
  });
  
  google.maps.event.addListener(blogLayer, 'click', function(e) {
    var zoom = map.getZoom();
    if (zoom<12) {
     map.setZoom(zoom+4);
    }
    map.setCenter(e.latLng);
    var a = "blog";
    showResults(a, map);
  });
}
  
  /*var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var events = "";
      var values;
      var rows = this.responseText.split("\r\n");
      for (i=0;i<rows.length;i++) {
        if (rows[i]!="") {
            values = rows[i].split(", ");
            events += "<p>" + values[0] + " " + values[1] + " " + values[2] + "</p>";
        }
      }
      document.getElementById("text").innerHTML = events;
      //document.getElementsByTagName("section")[0].style.height="auto";
    }
  };
  xhttp.open("GET", "https://script.google.com/macros/s/AKfycby9VN3ghF35t1Z4csV9kycvQyBqiYF8irms_ybLMmsZrKFlU9rb/exec?a=events_csv", true);
  xhttp.send();*/
