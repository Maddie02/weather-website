const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f5be2ee6b36992b2f350fffc0f6f3aa2/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try again.', undefined)
        } else {
            callback(undefined,
                body.timezone + ': ' +
                body.currently.summary + '. It is ' +
                body.currently.temperature + ' degrees out. There is a ' +
                body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
}

module.exports = forecast