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
