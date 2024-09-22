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
        console.log("Low inventory for one or more food items."); // Indicates that there is a low stock for certain food items
        return;
    }

    itemsOrdered.forEach(purchasedItem => {
        let product = inventory.find(item => item.name === purchasedItem.name); //Helps to find certain items in the inventory
        product.quantity -= purchasedItem.quantity;
    });

    let newOrder = {
        customerName: customerName,
        items: itemsOrdered,
        status: "Pending"
    }

    orders.push(newOrder); //Pushes new orders
    console.log(`Order confirmed for ${customerName}.`); //Indicates to the customer that their order was processed successfully
}

// Task 4: Create a Function to Calculate Total for an Order
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        let product = inventory.find(product => product.name === item.name);
        return product ? total + (product.price * item.quantity) : total; }, 0);
}
let orderTotal = calculateOrderTotal(orders[0]); 
console.log(`Final Amount: $${orderTotal.toFixed(2)}`); // Output - Final Amount: 18.25

// Task 5: Create a Function to Mark an Order as Completed
function completeOrder(customerName) {
    let order = orders.find(order => order.customerName === customerName);

    if (order) {
        order.status = "Completed";
        console.log(`Order for ${customerName} is Completed.`); // Message for a completed order
    } else {
        console.log(`Error: Order not found for ${customerName}.`); // Error message for an order
    }
}
completeOrder("Brianna Deaubler"), // Example for Brianna D. order
completeOrder("Jesenia Chatman"), // Example for Jesenia C. order
completeOrder("Isabella Moore"); // Example for Isabella M. order

// Task 6: Create a Function to Check Pending Orders
function checkPendingOrders() {
    let incompleteOrders = orders.filter(order => order.status === "Pending");

    if (incompleteOrders.length > 0) {
        console.log("Pending Orders:");
        pendingOrders.forEach(order => console.log(`Customer: ${order.customerName}`));
    } else {
        console.log("No Pending Orders.");
    }
}
checkPendingOrders();
