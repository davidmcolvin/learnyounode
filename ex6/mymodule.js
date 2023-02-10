const fs = require('fs');
const path = require('path');

function find (filePath,extension,callback){
     fs.readdir(filePath, 'utf8', function(err, data) {
        if (err) { return callback(err); }
        const files = data;
        const returnData = [];
        files.forEach(function(file) {
            const ext = path.extname(file);
            if (ext === '.'+extension) {returnData.push(file)}
        });
        return callback(null, returnData);
    });
}

module.exports = find;
