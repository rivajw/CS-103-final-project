let map;
let hospital = { lat: 37.92120573142126, lng: -122.03200324460754 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: hospital,
    zoom: 17,
  });
  
  const marker = new google.maps.Marker({
    position: hospital,
    map: map,
  });

}

window.initMap = initMap;