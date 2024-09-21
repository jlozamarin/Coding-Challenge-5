// Task 1: Create an Inventory Array of Product Objects

// Notes: The inventory array stores a list of product objects available in the coffee shop

let inventory = [
    {name: "Iced Latte", price: 4.25, quantity: 35},
    {name: "Expresso", price: 3.00, quantity: 50},
    {name: "Guava Pastry", price: 3.25, quantity: 15},
    {name: "Blueberry Muffin", price: 2.75, quantity: 20}
];
console.log(inventory);

// Task 2: Create an Orders Array of Order Objects

// Notes: There are 3 orders created for customers - Brianna Deaubler, Jesenia Chatman, and Isabella Moore

let orders = [
    {
        customerName: "Brianna Deaubler",
        items: [  { name: "Iced Latte", quantity: 2 }, { name: "Guava Pastry", quantity: 3 } ],
        status: "Pending"
    },
    {
        customerName: "Jesenia Chatman",
        items: [ { name: "Blueberry Muffin", quantity: 2 }, { name: "Espresso", quantity: 1 } ],
        status: "Pending"
    },
    {
        customerName: "Isabella Moore",
        items: [ { name: "Iced Latte", quantity: 1 }, { name: "Expresso", quantity: 1 } ],
        status: "Completed"
    }
];
console.log(orders);

// Task 3: Create a Function to Place an Order

function placeOrder(customerName, itemsOrdered) {
    if (itemsOrdered.any(purchasedItem => {
        let product = inventory.find(item => item.name === purchasedItem.name);
        return !product || product.quantity < purchasedItem.quantity;
    })) {
        console.log("Low inventory for one or more food items.");
        return;
    }

    itemsOrdered.forEach(purchasedItem => {
        let product = inventory.find(item => item.name === purchasedItem.name);
        product.quantity -= purchasedItem.quantity;
    });

    orders.push({ customerName, items: itemsOrdered, status: "Pending" });
    console.log(`Order confirmed for ${customerName}.`);
}




