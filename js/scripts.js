// Business logic
function beepBoop(input) {
  let numArray = [];
  for (i = 0; i <= input; i++) {
    numArray.push(i);
    if(numArray[i] === 1) {
      numArray[i] = "Beep!";
    } 
    else if (numArray[i] === 2) {
      numArray[i] = "Boop!";
    }
  }
  return numArray;
}

let iSplitArray = [numArray[i]];
iSplitArray.split('');
    iSplitArray.forEach(function(element) {
      if(element === 1) {
        iSplitArray = "Beep!";
        iSplitArray = numArray[i];
      }
      else {
        iSplitArray.join();
        iSplitArray = numArray[i];
      }
    });



// UI logic