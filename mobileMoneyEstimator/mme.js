// Function to calculate transaction fee and total amount to be debited
function estimateTransactionFee(amountToSend) {
  const minFee = 10;             // Minimum fee in KES
  const maxFee = 70;             // Maximum fee in KES
  const feePercent = 0.015;      // 1.5% fee rate

  // Calculate initial fee as 1.5% of the amount
  let fee = amountToSend * feePercent;

  // Ensure fee adheres to minimum and maximum limits
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  // Calculate the total amount that will be debited from the sender
  const totalDebit = amountToSend + fee;

  // Display the details to the user with clear formatting
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebit}\n`);
  console.log(`Send Money Securely!`);
}

// Prompt the user to enter the amount they want to send and convert it to a number
const inputAmount = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(inputAmount);

// Validate input to ensure it's a positive number before calculating fees
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  // Inform user if the input is invalid
  console.log("Tafadhali ingiza kiasi halali.");
}
