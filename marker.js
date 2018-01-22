var LeafIcon = L.Icon.extend({
    options: {
     
        iconSize:     [45,55],

        iconAnchor:   [22, 94],

	 popupAnchor:  [-3, -76]
    }
}); 
 var redIcon = new LeafIcon({iconUrl: 'map-redIcon.png'}),
    blueIcon = new LeafIcon({iconUrl: 'map-blueIcon.png'});
    L.icon = function (options) {
    return new L.Icon(options);
};
L.marker([ 30.85957, 75.86165], {icon: blueIcon}).addTo(map).bindPopup("Workshop");
L.marker([ 30.85878, 75.86356], {icon: redIcon}).addTo(map).bindPopup("Come Let's play");
