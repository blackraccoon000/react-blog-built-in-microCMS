const path = require('path');
const a = path.join(__dirname, 'public', 'dist');
const b = path.resolve(__dirname, '../public/dist');

console.log(a);
console.log(b);
