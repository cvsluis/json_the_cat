const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const breedFetcher = () => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      console.log('error:', error);
      return;
    } else if (data.length === 0) {
      console.log(`${breedName} breed not found.`);
      return;
    } else {
      console.log(data[0]);
    }
  });
};



breedFetcher();