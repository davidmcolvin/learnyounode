const mymodule = require('./mymodule');

const filePath = process.argv[2];

const fileExtension = process.argv[3];

function done (err, data) {
if (err) {console.log('error')};
data.forEach(function(file){ console.log(file)});
}

mymodule(filePath, fileExtension, done);


