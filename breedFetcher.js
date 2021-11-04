const request = require('request');
const command = process.argv.slice(2);
const breed = command[0];




request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  if (body.length === 2 || response && response.statusCode >= 300) {
    console.log('Looks like we\'ve got a problem! Please try again with a valid URL/Breed'); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});