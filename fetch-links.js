const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://techyhigher.com/gametwist-slots-free-coins/';

axios.get(url).then(({ data }) => {
  const $ = cheerio.load(data);
  const links = [];
  $('a[href*="gametwist"]').each((index, element) => {
    links.push($(element).attr('href'));
  });
  fs.writeFileSync('links.json', JSON.stringify(links));
}).catch(err => {
  console.error('Error fetching links:', err);
});
