'use strict';
//var cats=require('./cat');
//console.log(cats);
import 'babel-polyfill';
import cats from './cat.js';
import $ from 'jquery';

$('<h1>Cats</h1>').appendTo('body');
const ul=$('<ul></ul>').appendTo('body');
for(const cat of cats){
$('<li></li>').text(cat).appendTo(ul);
}



