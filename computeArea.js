// Create a function called computeArea that takes two arguments: width and height. It returns the area of a rectangle whose width is width and height is height. So computeArea(2, 2) would return 4, and computeArea(3, 5) would return 15.

computeArea=(width, height)=> {
  return width * height;
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests

function testComputeArea() {
  let width = 3;
  let height = 4;
  let expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  }
  else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();