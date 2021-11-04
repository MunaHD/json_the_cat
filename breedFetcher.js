const request = require('request');
const command = process.argv.slice(2);
const breed = command[0];


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body); 

    if (body.length === 2 || response && response.statusCode >= 300 || breedName !== data[0].name) {
      // console.log('Looks like we\'ve got a problem! Please try again with a valid URL/Breed');
      callback('Looks like we\'ve got a problem! Please try again with a valid URL/Breed', null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};




module.exports = { fetchBreedDescription };
