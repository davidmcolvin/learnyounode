'use strict'

const http = require('http')
const url = require('url');
const port = process.argv[2]


const server = http.createServer(function(req,res) {

if (req.method !== "GET") {
 res.statusMessage="Get Only";
 res.status(400).end();
} 

//let myUrl = new URL(req.headers.host + req.url);
let myUrl = url.parse(req.headers.host + req.url);
let myData = myUrl.query
let myDate;
let body = '';

switch (myUrl.pathname) {
case port + '/api/parsetime':
 myDate = new Date(myData.iso);
 let seconds = myDate.getSeconds();
 let minutes = myDate.getMinutes();
 let hours = myDate.getHours();
 body = JSON.stringify({ hour:hours, minute:minutes, second:seconds });
 res.writeHead(200, {
                        'Content-Type': 'application/json'
                    
                    })
                    .end(body);
break;
case port+'/api/unixtime':
 myDate = new Date(myData.unixtime);
 let myUnixtime = myDate.getTime();
 body = JSON.stringify({ unixTime:myUnixtime });
  res.writeHead(200, {
                        'Content-Type': 'application/json'
                    
                    })
                    .end(body); 
break;
default:
 res.writeHead(400).end();
break;
}
        
}   
);

server.listen(port);
