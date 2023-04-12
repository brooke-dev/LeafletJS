// Had to do document.addEventListener with domcontentloaded as there was a fetching error when the page was being called along with the map. 

document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([39.9128, -105.0749], 16);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  
    var marker = L.marker([39.9128, -105.0749]).addTo(map);
    marker.bindPopup("<b>First Bank Center</b>").openPopup();
  });
  
  