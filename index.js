const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const url = 'https://www.slotparkbonuscode.de/';

axios.get(url).then(({ data }) => {
  const $ = cheerio.load(data);
  const links = [];
  $('a[href*="slot.pk/"]').each((index, element) => {
    links.push($(element).attr('href'));
  });
  console.log('Fetched links:', links);
  fs.writeFileSync('links.json', JSON.stringify(links));
}).catch(err => {
  console.error('Error fetching links:', err);
  process.exit(1); // Exit with an error code
});
