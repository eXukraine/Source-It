const {Readable} = require('stream');

const inStream = new Readable();

inStream.push('askjfdhalkfhqlkjfh');
inStream.push(null);

inStream.pipe(process.stdout)