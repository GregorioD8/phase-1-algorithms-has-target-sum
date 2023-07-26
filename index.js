function hasTargetSum(array, target) {
  const seenNumbers = {}
  //create an object to keep track of numbers we've already seen
  for(const number of array) {
    //for the current num, identify a compliment thta adds to the target (comp = target - num)
    const compliment = target - number
    //check if any key on our object is the compliment
    //if so return true
    if(compliment in seenNumbers) return true
    //othrewise add that number to the object
    seenNumbers[number] = true 
  }
  return false
}






// function hasTargetSum(array, target) {
// tF = false
//   // Write your algorithm here
// for(let i = 0; i < array.length; i++){
//   //n steps
//   num1 = array[i]
//   for (let j = i + 1; j< array.length; j++){
//     //n * n steps
//     num2 = array[j]
//     // console.log(`${num1}+${num2}=${num1 + num2}    target? ${num1 + num2 === target}`)
//     if(num1 + num2 === target){
//       tF = true
//     }
//   }

// }
//  return tF
// }

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here  
 
  add first number to each number 
  if first number added to any other number does not equal target
  repeat process with next number
  add first number to second number
*/

/*
  Add written explanation of your solution here
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
