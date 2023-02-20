const net = require('net');

const port = process.argv[2];

const server = net.createServer(function(socket){

let date = new Date();

let returnData = formatDateTimeToString(date);

socket.end(returnData);


});

function formatDateTimeToString(date) {
var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
var yyyy = date.getFullYear();
var hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
               return (yyyy + "-" + MM + "-" + dd + ' ' + hours + ':' + minutes +"\n");
}            

server.listen(port);
