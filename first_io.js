 var fs = require('fs');

 var buf = fs.readFileSync(process.argv[2]);

 var bufStr = buf.toString();

 var arr = bufStr.split('\n');
 
 console.log(arr.length - 1);
