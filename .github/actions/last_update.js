var fs = require('fs');
var date = new Date();

fs.writeFile('update.json', '{"update":"' + date.toISOString() + '"}', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
