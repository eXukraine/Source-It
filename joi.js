

const {createReadStream, createWriteStream} = require('fs');

const readStrim = createReadStream('./file.txt');
const writeStrim = createWriteStream('./file.copy.txt');

readStrim.pipe(writeStrim, {end:false})

readStrim.on('end', () => {
    writeStrim.write('\n\n Fagoth')
})


