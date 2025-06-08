// Function to calculate and display the estimated fare for a boda boda ride
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;          // Base fare in KES
  const chargePerKm = 15;       // Per kilometer charge in KES

  // Calculate total fare using base fare and distance charge
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  // Output the fare details with the required local phrasing and format
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log(`Panda Pikipiki!`);
}

// Prompt the user for the trip distance and convert input to a number
const inputDistance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = parseFloat(inputDistance);

// Validate the input to ensure it is a positive number before calculating fare
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  // Inform the user if the input was invalid
  console.log("Tafadhali ingiza kilomita halali.");
}
