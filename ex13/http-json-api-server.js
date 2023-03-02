'use strict'

const http = require('http')

const port = process.argv[2]


const server = http.createServer(function(req,res) {

        if (req.method !== "GET") {
            res.statusMessage="Get Only";
            res.status(400).end();
        } 
const myUrl = new URL(req.headers.host + req.url);
//const myUrl = new URL(req, req.url);
switch (myUrl.pathname) {
case port + '/api/parsetime':
 const body = JSON.stringify({'test':'hello'});
 res.writeHead(200, {
                        'Content-Type': 'application/json'
                    
                    })
                    .end(body);
break;
case port+'/api/unixtime':
 res.writeHead(200, {'Content-Type': 'application/json'});
 res.message('hello2').end();
break;
default:
 res.writeHead(400).end();
break;
}

        /*
        const myPath = myUrl.pathname;
        const rawSearch = myUrl.search.slice(1);
        const myDate = new Date(rawSearch);
        const myTime = myDate.toString().substr(11,2);           

        if (myPath === 'api/parsetime') {
            
            let myRes = '"hour": ' + myTime.substr(0,2);

        } else if (myPath === 'api/unixtime') {
            

        } else {
        }
           */

}   
);

server.listen(port);
