let geolocation = document.getElementById('geolocation');
let city = document.getElementById('city');
let geolocationStamp = document.getElementById('geolocationStamp');

function getLocation() {
  // Check whether browser supports Geolocation API or not
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCity);
  } else {
    alert('This browser does not support HTML Geolocation.');
  }
}

function getCity(position) {
  // <link>
  // https://www.bigdatacloud.com/geocoding-apis/free-reverse-geocode-to-city-api
  
  //<JSON format response>
  // https://api.bigdatacloud.net/data/reverse-geocode-client?
  // latitude=37.42159
  // &longitude=-122.0837
  // &localityLanguage=en
  let bigdatacloudAPI = "https://api.bigdatacloud.net/data/reverse-geocode-client?";
  let latitude = "latitude=" + position.coords.latitude;
  let longitude = "&longitude=" + position.coords.longitude;
  let query = latitude + longitude + "&localityLanguage=en";
  bigdatacloudAPI += query;

  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  const http = new XMLHttpRequest();
  const method = "GET";

  http.open(method, bigdatacloudAPI);
  http.send();

  http.onreadystatechange = function() {
    // You know the entire content has been received when the value of readyState becomes 
    // XMLHttpRequest.DONE (4), and status becomes 200 ("OK").
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let myObj = JSON.parse(this.responseText);
      console.log(myObj);
      geolocationStamp.innerHTML = myObj.city + ", " + myObj.countryName;
    }
  };
}

