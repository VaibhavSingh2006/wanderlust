// use token coming from EJS
const apiKey = mapToken;

// get coordinates from listing sent by backend
const coordinates = listingData.geometry.coordinates;
const lng = coordinates[0];
const lat = coordinates[1];

// create map
const map = L.map("map").setView([lat, lng], 13);

console.log("Coordinates:", listingData.geometry.coordinates);
// add MapTiler tiles
L.tileLayer(
  `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${apiKey}`,
  {
    tileSize: 512,
    zoomOffset: -1,
    attribution: "&copy; MapTiler & OpenStreetMap contributors",
  }
).addTo(map);

// add marker
L.marker([lat, lng])
  .addTo(map)
  .bindPopup(listingData.location)
  .openPopup();