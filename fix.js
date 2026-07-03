const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Home', 'Home.js');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/dispatch\(setRates\(\{ \.\.\.rates, (.*?): parseInt\(e\.target\.value\)\) \|\| 0 \}\)\}/g, 'dispatch(setRates({ ...rates, $1: parseInt(e.target.value) || 0 }))');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed syntax error in Home.js!');
