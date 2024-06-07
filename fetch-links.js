const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

console.log("Starting script...");

const url = 'https://www.slotparkbonuscode.de/';

axios.get(url).then(({ data }) => {
  console.log("Fetched data...");
  const $ = cheerio.load(data);
  const links = [];
  $('a[href*="gametwist"]').each((index, element) => {
    links.push($(element).attr('href'));
  });
  console.log("Links fetched:", links);
  fs.writeFileSync('links.json', JSON.stringify(links));
  console.log("Links saved to links.json");
}).catch(err => {
  console.error('Error fetching links:', err);
});
