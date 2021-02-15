const { throws } = require("assert");

class InventoryItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${item.name} costs ${item.price}`)
    }

}

class GoldenInventoryItem {

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }
}

class DiamondInventoryItem {

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }

    print() {
        console.log(`${this.name} costs alot of money...`)
    }
}

module.exports = {InventoryItem, DiamondInventoryItem, GoldenInventoryItem};
