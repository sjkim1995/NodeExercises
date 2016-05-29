var filter = require('./my_module.js')

filter(process.argv[2], process.argv[3], function (error, list) {
  
  if (error) {
  	console.error("Error");
  }
  list.forEach(function (file) {
    console.log(file)
  })
})
