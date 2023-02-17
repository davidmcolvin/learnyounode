const http = require('http');
const bl = require('bl');

const url1 = process.argv[2];

const url2 = process.argv[3];

const url3 = process.argv[4];

let success = 0;

let url1Message = '';
let url2Message = '';
let url3Message = '';

http.get(url1, (response) => {
    response.pipe(bl(function(err,data){
        if (err) {console.log('Error');return;}
        url1Message = data.toString();
        success+=1;
        if (success == 3) {final();}
    }));
});


http.get(url2, (response) => {
    response.pipe(bl(function(err,data){
        if (err) {console.log('Error');return;}
        url2Message = data.toString();
        success+=1;
        if (success == 3) {final();}
    }));
});


http.get(url3, (response) => {
    response.pipe(bl(function(err,data){
        if (err) {console.log('Error');return;}
        url3Message = data.toString();
        success+=1;
        if (success == 3) {final();}
    }));
});


function final(){
console.log(url1Message);
console.log(url2Message);
console.log(url3Message);
}
