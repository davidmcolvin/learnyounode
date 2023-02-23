'use strict'

const http = require('http')

const port = process.argv[2]


const server = http.createServer(function(req,res) {
        if (req.method !== "GET") {
            res.statusMessage="Get Only";
            res.status(400).end();
        } 

        const myUrl = new URL(req.url);
        
        const myPath = myUrl.pathname;
        const rawSearch = myUrl.search.slice(1);
        const myDate = new Date(rawSearch);
        const myTime = myDate.toString().substr(11,2);           

        if (myPath === 'api/parsetime') {
            
            res.writeHead(200, {'Content-Type': 'application/json'});
            let myRes = '"hour": ' + myTime.substr(0,2);

        } else if (myPath === 'api/unixtime') {
            
            res.writeHead(200, {'Content-Type': 'application/json'});

        } else {

            res.statusMessage="Invalid path";
            res.status(400).end();
        }

    }
);
