var rightNow = new Date();
var std_time_offset = -5;

var june1 = new Date(rightNow.getFullYear(), 6, 1, 0, 0, 0, 0);

temp = june1.toGMTString(); // converting in to GMT

var june2 = new Date(temp.substring(0, temp.lastIndexOf(" ") - 1));

var daylight_time_offset = (june1 - june2) / (1000 * 60 * 60); // comparing two date offset

var dst;

if (std_time_offset === daylight_time_offset) {
    dst = "0"; // daylight savings time is NOT observed

} else {
    dst = "1"; // daylight savings time is observed

}


function convertToServerTimeZone() {

    //EST
    offset = -5.0;

    clientDate = new Date();
    utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

    serverDate = new Date(utc + (3600000 * offset));

    alert(serverDate.toLocaleString());


}
