const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Home', 'Home.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace `|| 0 }))` with `|| 0 }))}`
content = content.replace(/\|\| 0 \}\)\)/g, '|| 0 }))}');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed missing brace in Home.js!');
