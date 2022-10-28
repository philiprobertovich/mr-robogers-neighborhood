// Business logic
function beepBoop(input) {
  let numArray = [];
  for (i = 0; i <= input; i++) {
    numArray.push(i);
    let iSplitArray = [numArray[i]];
    iSplitArray.split('');
    iSplitArray.forEach(if(element === 1) {
      iSplitArray = "Beep!";
      iSplitArray = numArray[i];
    }
    else {
      iSplitArray.join();
      iSplitArray = numArray;
    }
  }
  return numArray;
}



// UI logic