function initMap() {
  var options = {
    zoom: 8,
    center: { lat: 36.2048, lng: 138.2529 }
  };

  var map = new google.maps.Map(document.getElementById("map"), options);
}
