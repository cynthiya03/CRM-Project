const fs = require('node:fs');
const path = require('node:path');

const resultsFolder = path.resolve(__dirname, '..', 'allure-results');

fs.rmSync(resultsFolder, {
  recursive: true,
  force: true,
});

console.log('Previous Allure results cleared.');