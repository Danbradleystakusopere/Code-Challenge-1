function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015;
  const transactionFee = Math.min(Math.max(percentageFee, 10), 70);
  const totalAmount = amountToSend + transactionFee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}\n`);
  console.log("Send Money Securely!");
}

// Prompt user for the amount to send
const amountInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(amountInput);
estimateTransactionFee(amountToSend);
