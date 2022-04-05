const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude +'&appid=fe9b2525d0b94603e8f414422227d852&units=metric'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.main.temp + ' degrees out. There is a '+body.clouds.all+ '% chance of rain')
        }
    })
}

module.exports = forecast