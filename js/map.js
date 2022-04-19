function initMap() {
	// The location of Uluru
	const uluru = {
		lat: 52.125614,
		lng: 23.698514,
	};
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: uluru,
		mapId: '7f906e240d8cd1d4'
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}

console.log('map');