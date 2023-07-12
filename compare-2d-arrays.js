/*
    Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
    Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the 
    new item and quantity into the inventory array. The returned inventory array should be in alphabetical 
    order by item.
*/
arr1 = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
]

arr2 = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
]


// Steps
/*
    1. Map over the arr2 and check through arr1(loop) => create 2 maps
    2. If the item in arr2 is not present to arr1 > add the element to arr1
    3. Sort the elements of returned array in alphabetical order
*/


// for (let i = 0; i < arr1.length; i++) {

//     arr2.map((item) => {
//         if (item[1] === arr1[1]) {
//             console.log("matched ")

//         } else {
//             arr1.push(item)
//         }
//     })
// }

// arr1.map(item1 => {
//     arr2.map(item2 => {
//         if (item1[1] === item2[1]) {
//             arr1[0] = arr1[0] + 1
//         } else {
//             arr1.push(item2)
//         }
//     })
// })

// console.log(arr1)

//solution
function updateInventory(arr1, arr2) {
    let combinedArr = arr1.concat(arr2); // Combine arr1 and arr2 into a single array
    let inventory = {};

    // Iterate over each item in the combined array
    for (let i = 0; i < combinedArr.length; i++) {
        let quantity = combinedArr[i][0];
        let item = combinedArr[i][1];

        // Check if item already exists in the inventory object
        if (inventory.hasOwnProperty(item)) {
            // If item exists, update the quantity
            inventory[item] += quantity;
        } else {
            // If item doesn't exist, add it to the inventory object
            inventory[item] = quantity;
        }
    }

    let sortedInventory = [];

    // Convert the inventory object to an array of [quantity, item] pairs
    for (let item in inventory) {
        sortedInventory.push([inventory[item], item]);
    }

    // Sort the array alphabetically by item name
    sortedInventory.sort(function (a, b) {
        return a[1].localeCompare(b[1]);
    });

    return sortedInventory;
}

// Test the function with the given arrays
let updatedInventory = updateInventory(arr1, arr2);
console.log(updatedInventory);