const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=18e5f3abd35cb6a493a2fecd68ee9567&query=New%20York";

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data)
    console.log(data.current)
});