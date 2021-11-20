
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// map:
 mapboxgl.accessToken = 'pk.eyJ1IjoiZmFicml6aW8tb25vcmlvIiwiYSI6ImNrdzZpdGhuaDBva3Ayb3JobzA2dXRkeWsifQ.EDIljUREdTleOEGRQH5i8A';

  const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [10.209954261779785, 45.54516220092773]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'Studio di Marco'
        }
      }
    ]
  };

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [10.209954261779785, 45.54516220092773],
    zoom: 14
  });

  // add markers to map
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);
  }
