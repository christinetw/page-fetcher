const request = require('request');

const args = process.argv;
const newArgs = args.slice(2);

const url = newArgs[0];
const filename = newArgs[1];

request(url, (error, response, body) => {
  console.log(body);
});