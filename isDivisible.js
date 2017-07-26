// Write a function called isDivisible that takes two arguments: divisee and divisor. This function should return true if divisee can be divided by divisor with no remainder, otherwise it should return false. So isDivisible(18, 3) should be true, while isDivisible(15, 4) should be false.

//Note that we haven't covered boolean values in depth in this lesson yet. All you need to know to complete this drill is that true is represented by the keyword true and false with the keyword false.



function isDivisible(divisee, divisor) {
   return (divisee % divisor)===0 ;
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests

function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  }
  else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();