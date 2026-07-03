const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Home', 'Home.js');
let content = fs.readFileSync(filePath, 'utf8');

// The line currently ends with })) instead of }))}
content = content.replace(/dispatch\(setRates\(\{ \.\.\.rates, (.*?): parseInt\(e\.target\.value\) \|\| 0 \}\)\)\n/g, 'dispatch(setRates({ ...rates, $1: parseInt(e.target.value) || 0 }))}\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed missing brace in Home.js!');
