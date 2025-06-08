// Function to calculate and display the ingredients needed for Kenyan Chai based on number of cups

function calculateChaiIngredients(numberOfCups) {
  // Calculate quantities by multiplying the standard recipe by the number of cups
  const water = numberOfCups * 200; // ml
  const milk = numberOfCups * 50;   // ml
  const teaLeaves = numberOfCups * 1; // tablespoons
  const sugar = numberOfCups * 2;   // teaspoons

  // Print out the results in the required format
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);
}

// Prompt user to enter number of chai cups, and convert input string to number
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input);

// Check if the input is a valid positive number before calculating ingredients
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  // Inform user if their input was invalid
  console.log("Please enter a valid number of cups.");
}
