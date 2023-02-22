'use strict'
const http = require('http')

const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer(function(req,res) {
       if (req.method !== "POST") {
            res.statusMessage = "Post only";
            res.status(400).end();
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "POST") {
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();

        })).pipe(res);
    }    
});

server.listen(port);

