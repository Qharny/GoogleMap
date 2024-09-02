let map;
        let marker;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map-container'), {
                center: {lat: 0, lng: 0},
                zoom: 2,
                styles: [
                    {
                        featureType: "all",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#e8e8e8" }]
                    },
                    {
                        featureType: "water",
                        elementType: "geometry.fill",
                        stylers: [{ color: "#b1d5f7" }]
                    }
                ]
            });

            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');

            searchButton.addEventListener('click', () => {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: searchInput.value }, (results, status) => {
                    if (status === 'OK') {
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(12);
                        if (marker) {
                            marker.setMap(null);
                        }
                        marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            animation: google.maps.Animation.DROP
                        });
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });
            });
        }