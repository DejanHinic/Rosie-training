  function initMap() {
            var map = new google.maps.Map(document.getElementById("map"),{
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766,

                }
            });
            var labels = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
            var location = [
              { lat: 40.785091, lng:-73.968285 },
            ];              
            var markers = location.map(function(location, i) {
                return new google.maps.Marker({
                    position:location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }