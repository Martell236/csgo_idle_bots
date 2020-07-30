const steaminventory = require('get-steam-inventory');
global.config = require('./configs/inv_config.json');
const fs = require('fs');
const htmlhead = "<!DOCTYPE html>\n<html>\n<head>\n<title>CSGO Inventory</title>\n</head>\n<body>\n";
const htmltail = "</body>\n</html>";
var i = 0;
var inv = [];

while(i < config.bots.length) {
  steaminventory.getinventory(730, config.bots[i].steamid, '2').then(data => {
    inv.push(data.marketnames);
  }).catch(err => console.log(err));
  i++;
}

function test() {
  for(n in config.bots) {
    fs.writeFile('C:\\Apache24\\htdocs\\' + config.bots[n].fn + '.html', '', function (err) {
      if (err) throw err;
    });
    fs.appendFile('C:\\Apache24\\htdocs\\' + config.bots[n].fn + '.html', '<p>' + inv[n] + '</p>', function (err) {
      if (err) throw err;
    });
  }

}

setTimeout(test, 10000);