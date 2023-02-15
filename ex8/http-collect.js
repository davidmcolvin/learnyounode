const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
        response.pipe(bl(function(err,data) {
                if (err) {console.log('error');return; } 
                const responseString = data.toString();
                const responseArray = responseString.split(" ");
                responseArray.forEach(function(res) {
                    console.log(res.length + '\n');
                    console.log(res + '\n');
                });
            }))
        });
