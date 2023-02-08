const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, contents ) {
        const mySplitContents = contents.split('\n');
        const myNum = mySplitContents.length;
        console.log(myNum-1);
    }

);
