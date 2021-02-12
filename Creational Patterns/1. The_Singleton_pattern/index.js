/**
 * GoF definition:
 * Ensure a class only has one instance, and provide a global point of access to it.
 */

var logger = require('./Logger');
var Shopper = require('./Shopper');
var Store = require('./Store');

logger.log('starting app...');

var alex = new Shopper('alex', 500)
var ski_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
])

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
