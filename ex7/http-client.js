const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {

    const {statusCode } = res;

    const contentType = res.headers['content-type'];

    let error;

    if (statusCode !== 200){
        error = new Error('Request Failed.\n'  +
                          'Status Code: ${statusCode}');
    }
   
    if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data',(chunk) => {console.log(chunk)});

});

