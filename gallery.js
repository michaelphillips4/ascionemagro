const fs = require('fs');
fs.readFile('/home/michaelp/otto_.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(data);

const links = new RegExp('https://ascionemagro.com/wp-content/uploads/2022/09/otto(.*)?.jpg','m');

const x = data.match(/\bhttps?:\/\/\S+/gi);


console.log(x);


});