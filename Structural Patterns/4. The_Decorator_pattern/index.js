/**
 * GoF definition:
 * Attach additional responsibilities to an object dynamically, Decorators provide a flexible alternative to subclassing for extending functionality
 */
var Shopper = require('./Shopper');
var { InventoryItem, GoldenInventoryItem, DiamondInventoryItem} = require('./InventoryItem');

var alex = new Shopper('Alex', 100);

// var alex = new Shopper('Alex', 3000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_necklace = new GoldenInventoryItem(necklace);
var diamon_gold_necklace = new GoldenInventoryItem(gold_necklace);

var diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(necklace);
alex.purchase(walkman);

alex.purchase(diamon_gold_necklace);
alex.purchase(diamond_walkman);

alex.printStatus();

diamond_walkman.print();
