const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const url = 'view-source:https://techyhigher.com/gametwist-slots-free-coins/';

axios.get(url).then(({ data }) => {
  const $ = cheerio.load(data);
  const links = [];
  $('a[href*="bit.ly/"]').each((index, element) => {
    links.push($(element).attr('href'));
  });
  console.log('Fetched links:', links);
  fs.writeFileSync('links.json', JSON.stringify(links));
}).catch(err => {
  console.error('Error fetching links:', err);
  process.exit(1); // Exit with an error code
});
