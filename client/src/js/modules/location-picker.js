import L from 'leaflet';
let map, marker;

export function initLocationPicker(containerId, onSelectCallback) {
  if (map) {
    map.remove(); // Remove existing map instance
  }

  map = L.map(containerId).setView([25.5, 85.2], 13); // Default to Bihar

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors',
  }).addTo(map);


  map.on('click', function (e) {
    const { lat, lng } = e.latlng;

    if (marker) {
      marker.setLatLng(e.latlng);
    } else {
      marker = L.marker(e.latlng).addTo(map);
    }

    if (onSelectCallback) {
      onSelectCallback(lat, lng);
    }
  });

  
  window.map = map;
}
