const request = require('request');
const fs = require('fs');

const args = process.argv;
const newArgs = args.slice(2);

const url = newArgs[0];
const filename = newArgs[1];

request(url, (error, response, body) => {
  fs.writeFile(filename, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    let len = body.length;
    console.log(`Downloaded and saved ${len} bytes to ${filename}`);
  })
  
});