get_geo_position();
function on_success(position) {
    document.getElementById("latitude").innerHTML = "Latitude = " + position.coords.latitude;
    document.getElementById("longitude").innerHTML =
        "Longitude= " + position.coords.longitude;
    document.getElementById("acc").innerHTML = "Accuracy = " + position.coords.accuracy;
    document.getElementById("altitude").innerHTML = "Altitude = " + position.coords.altitude;
    latlon = position.coords.latitude + "," + position.coords.longitude;
    img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon +
        "&zoom=14&size=400x300&key=AIzaSyBLtFfFn-evexggUkHY50vZvO1s10Vgbc";
    document.getElementById("map").innerHTML = "<img  src = '" + img_url + "' > ";
}
function on_error(e) {
    document.getElementById("text").innerHTML = e.message;
}
var geo_params = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
};
function get_geo_position() {
    var geo = navigator.geolocation;
    geo.getCurrentPosition(on_success, on_error, geo_params)
}