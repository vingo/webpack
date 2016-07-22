//method 1
//require('!style!css!./style.css');
//require('./style.css'); //webpack ./entry.js bundle.js --module-bind 'css=style!css'
document.write(require('./content'));
document.write('<br>hello world again...');




