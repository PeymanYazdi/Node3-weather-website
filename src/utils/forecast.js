const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=660dd51d37b286a4eb8e35575a68a494&query=' + latitude +',' + longitude +'&units=f';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' degrees out. It feels like '+ body.current.feelslike+ ' degrees out. ' + 'Also humidity is '+ body.current.humidity + '%.' );
        }
    })
}

module.exports = forecast;