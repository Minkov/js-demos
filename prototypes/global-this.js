// <script src="file-1.js"></script>
// <script src="global-this.js"></script>
require('./file-1');

console.log(a);
console.log(b);
global.b = 7;
console.log(this.c);