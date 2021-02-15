/**
 * GoF definition:
 * Avoid coupling the sender of a request to its reciever by giving more than one object a chance to handle the request. Chain the recieving objects and pass
 * the request along the chain
 */
var Store = require('./Store');
var inventory = require('./inventory');

var skiShop = new Store('Steep and Deep', inventory);

var searchItem1 = 'ski hats';
var searchItem2 = 'ski poles';
var searchItem3 = 'wax';
var searchItem4 = 'powder skis';

var results1 = skiShop.find(searchItem1);
var results2 = skiShop.find(searchItem2);
var results3 = skiShop.find(searchItem3);
var results4 = skiShop.find(searchItem4)

console.log( results1 );
console.log( results2 );
console.log( results3 );
console.log( results4 );
