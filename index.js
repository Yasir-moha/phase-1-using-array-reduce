
// Code your solution here
// Define the batteryBatches array
const batteryBatches = [
    { batteryAmount: 10 },
    { batteryAmount: 10 },
    { batteryAmount: 11 }
  ];
  
  // Use reduce to aggregate the total number of batteries
  const totalBatteries = batteryBatches.reduce((total, batch) => {
    return total + batch.batteryAmount;
  }, 0);
  
  // Log the total number of batteries to the console
  console.log(totalBatteries); // Output: 31
  
  // Exporting the totalBatteries variable (if needed in a module system)
  module.exports = totalBatteries;
  