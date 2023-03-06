'use strict'

const http = require('http')
const url = require('url');
const port = process.argv[2]


const server = http.createServer(function(req,res) {

if (req.method !== "GET") {
 res.statusMessage="Get Only";
 res.status(400).end();
} 

let myUrl = url.parse(req.headers.host + req.url,true);
let myData = myUrl.query
let myDate;
let body = '';
myDate = new Date(myData.iso);

switch (myUrl.pathname) {
case '/api/parsetime':
 let seconds = myDate.getSeconds();
 let minutes = myDate.getMinutes();
 let hours = myDate.getHours();
 body = JSON.stringify({ hour:hours, minute:minutes, second:seconds });
 res.writeHead(200, {
                        'Content-Type': 'application/json'
                    
                    })
                    .end(body);
break;
case '/api/unixtime':
 let myUnixtime = myDate.getTime();
 body = JSON.stringify({ unixtime:myUnixtime });
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
