var appName = "Google Play Music";
var wiFi = '"belkin.900"';


// Check for wifi connection
device.network.on('wifiOn', function(signal) {
    console.log('Pretest Passed');

    // if wifi ssid matches your home network, launch app.
    if(signal.ssid === wiFi) {
        // launch app
        var apps = device.applications;
        apps.launch(appName);
		device.media.volume = 50;
		device.media.play();
        console.log("Launched " + appName);
}

console.log(signal.ssid === wiFi);
console.log('wiFi variable is ' + wiFi);
console.log('signal ssid is' + signal.ssid);
console.log( 'Connected to: ' + signal.ssid );
console.log( 'Script completed successfully' );
});
