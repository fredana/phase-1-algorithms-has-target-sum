function hasTargetSum(array, target) {
  // Write your algorithm here

  
    const visited = new Set(); // Set to store visited numbers
  
    for (let num of array) {
      const complement = target - num; // Calculate the complement for each number
  
      // Check if the complement has been visited before
      if (visited.has(complement)) {
        return true; // Pair found, return true
      }
  
      visited.add(num); // Add the current number to the visited set
    }
  
    return false; // No pair found, return false
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  The test suite consists of several test cases:

The first test case checks if the array [3, 8, 12, 4, 11, 7] has two numbers that add up to the target sum of 10. 
It expects the hasTargetSum function to return true.
The second test case checks if the array [22, 19, 4, 6, 30] has two numbers that add up to the target sum of 25. 
It also expects the hasTargetSum function to return true.
The third test case checks if the array [1, 2, 5] has two numbers that add up to the target sum of 4. 
It expects the hasTargetSum function to return false.
The fourth test case checks if the array [-7, 10, 4, 8] has two numbers that add up to the target sum of 3. 
It expects the hasTargetSum function to return true.
The fifth test case checks if the array [1, 2, 3, 4] has two numbers that add up to the target sum of 5. 
It expects the hasTargetSum function to return true.
The sixth test case checks if the array [2, 2, 3, 3] has two numbers that add up to the target sum of 4. 
It also expects the hasTargetSum function to return true.
The seventh test case checks if the array [4] has two numbers that add up to the target sum of 4. 
It expects the hasTargetSum function to return false.
*/

/*
  Add written explanation of your solution here

  It creates a Set called visited to store the visited numbers.
It iterates over each number in the array.
For each number, it calculates the complement by subtracting the number from the target.
It checks if the complement exists in the visited set. If it does, it means there is a pair of numbers that adds up to the target, 
so it returns true.
If the complement is not in the visited set, it adds the current number to the visited set using the add method.
If the loop completes without finding a pair, it means no pair of numbers adds up to the target, so it returns false.
We can now use the hasTargetSum function to check if any pair of numbers in an array adds up to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
