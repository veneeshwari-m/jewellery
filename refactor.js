const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Home', 'Home.js');
let content = fs.readFileSync(filePath, 'utf8');

// Wrap setRates in dispatch
content = content.replace(/setRates\((.*?)\)/g, 'dispatch(setRates($1))');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully refactored setRates in Home.js to use dispatch!');
