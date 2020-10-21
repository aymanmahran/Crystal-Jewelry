$(document).ready(function() {
    var uluru = {lat: 29.9719256, lng: 31.0155362};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
    });
});