const request = require('request');
const fs = require('fs')

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
    //console.log(error)
    if (response.statusCode === 200) {
        fs.writeFile(path, body, (error) => {
            console.log("done")
        }) 
    }})