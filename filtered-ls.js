const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const fileType = process.argv[3];



fs.readdir(filePath, 'utf8',  function(err, list) {
    for(let i = 0; i < list.length; i++) {
        let extension = path.extname(list[i]).substring(1);
        if (extension === fileType) {
            console.log(list[i]);
        }
    }
});
