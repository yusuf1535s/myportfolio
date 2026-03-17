const https = require('https');
const fs = require('fs');

const files = [
  { url: "https://raw.githubusercontent.com/github/explore/19b02dcacabdb2ec047ebde98797f1f0a149cbca/topics/python/python.png", name: "python.png" },
  { url: "https://raw.githubusercontent.com/github/explore/19b02dcacabdb2ec047ebde98797f1f0a149cbca/topics/html/html.png", name: "html.png" },
  { url: "https://raw.githubusercontent.com/github/explore/19b02dcacabdb2ec047ebde98797f1f0a149cbca/topics/css/css.png", name: "css.png" },
  { url: "https://raw.githubusercontent.com/github/explore/19b02dcacabdb2ec047ebde98797f1f0a149cbca/topics/git/git.png", name: "git.png" }
];

files.forEach(file => {
  https.get(file.url, response => {
    if (response.statusCode === 200) {
      const fileStream = fs.createWriteStream(file.name);
      response.pipe(fileStream);
      fileStream.on('finish', () => console.log('Downloaded', file.name));
    } else {
      console.error('Failed to download', file.name, response.statusCode);
    }
  }).on('error', err => console.error(err));
});
