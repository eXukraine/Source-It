
const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const {Transform} = require('stream');

fs.createReadStream(file).pipe(zlib.createGzip())
                         .pipe(fs.createWriteStream(file + '.gz'))
                         .on('finish', () => console.log('Done'))