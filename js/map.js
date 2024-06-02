const coord = [51.2302, 4.4141];

var icon = L.icon({
  iconUrl: "asset/img/secretglowlogo.png",
  iconSize: [100, 40],
  iconAnchor: [50, 100],
  popupAnchor: [-3, -76],
});

var map = L.map("map").setView(coord, 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="/index.html">SecretGlow</a>',
}).addTo(map);

L.marker(coord, { icon: icon })
  .bindPopup(
    '<div style="text-align: center;">SecretGlow<br/><a href="https://maps.app.goo.gl/9xC3ckFfLVRvSXRV9" target="_blank">Route naar</a></div>'
  )
  .addTo(map);
