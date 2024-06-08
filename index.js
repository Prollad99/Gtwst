const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://techyhigher.com/gametwist-slots-free-coins/';

axios.get(url).then(({ data }) => {
  const $ = cheerio.load(data);
  const links = [];
  $('a[href*="bit.ly/"]').each((index, element) => {
    const href = $(element).attr('href');
    const text = $(element).text();
    links.push({ href, text });
  });
  console.log('Fetched links:', links);
  fs.writeFileSync('links.json', JSON.stringify(links, null, 2));
}).catch(err => {
  console.error('Error fetching links:', err);
  process.exit(1); // Exit with an error code
});
