/**
 * GoF definition:
 * Provide a surrogate or placeholder for another object to control access to it
 */

var path = require('path');
var FS_proxy = require('./FS_proxy');

var fs = new FS_proxy(require('fs'))

var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
