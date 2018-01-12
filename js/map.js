//    map data
function initMap() {
    // map options
    let jass = {
        zoom: 8,
        center: { lat: 31.1471, lng: 75.3412 }
    }
    // new map and location is punjab my birthplace in india
    let map = new google.maps.Map(document.getElementById('map'), jass);

    // add marker on map in blank space
    google.maps.event.addListener(map, 'click', function (event) {
        // add marker
        addMarker({

            coords: event.latLng
        });
    });




    // creating an array
    let marker = [
        {
            coords: { lat: 30.8165, lng: 75.1717 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h2>Moga</h2>'
        },
        {
            coords: { lat: 30.7333, lng: 76.7794 },
            content: '<h2>Chandigarh</h2>'
        },
        {
            coords: { lat: 31.6340, lng: 74.8723 },
            content: '<h2>Amritsar</h2>'
        }


    ];


    addMarker({
        coords: { lat: 30.8165, lng: 75.1717 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h2>Moga</h2>'
    });
    addMarker({
        coords: { lat: 30.7333, lng: 76.7794 },
        content: '<h2>Ludhiana</h2>'
    });
    addMarker({
        coords: { lat: 31.6340, lng: 74.8723 },
        content: '<h2>Amritsar</h2>'
    });

    // add marker function
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            // icon:props.iconImage
        });
        // if and check for custom icon
        if (props.iconImage) {
            // set icon image
            marker.setIcon(props.iconImage);
        }

        // check for content
        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            // adding on click event
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}