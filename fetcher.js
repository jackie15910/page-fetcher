const fs = require('fs');
const request = require('request');

let input = process.argv.slice(2)
/* console.log(input); */
let url = input[0];
/* console.log(url); */
let filePath = input[1];
/* console.log(filePath); */

request(url, (error, response, content) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', content); // Print the HTML for the Google homepage.
  writeFile(filePath, content);
});

const writeFile = function(filePath, content) {
  fs.writeFile(`${filePath}`, content, (error) => {
    if (error) {
      console.log(error)
    }
    else console.log("Success");
  })
};