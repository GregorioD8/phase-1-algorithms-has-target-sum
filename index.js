function hasTargetSum(array, target) {
tF = false
  // Write your algorithm here
for(let i = 0; i < array.length; i++){
  num1 = array[i]
  for (let j = i + 1; j< array.length; j++){
    num2 = array[j]
    console.log(`${num1}+${num2}=${num1 + num2}    target? ${num1 + num2 === target}`)
    if(num1 + num2 === target){
      tF = true
    }
  }

}
 return tF
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here  
 
  add first number to each number 
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
