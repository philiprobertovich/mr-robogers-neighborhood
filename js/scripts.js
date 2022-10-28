// Business logic
function beepBoop(input) {
  let numArray = [];
  for (i = 0; i <= input; i++) {
    numArray.push(i);
    if (i < 10) {
      if(numArray[i] === 1) {
        numArray[i] = "Beep!";
      } 
      else if (numArray[i] === 2) {
        numArray[i] = "Boop!";
      }
      else if (numArray[i] === 3) {
        numArray[i] = "Won't you be my neighbor?";
      }
    }
    else {
      let iSplitArray = [];
      iSplitArray.push(numArray[i].toString());
      console.log(iSplitArray);
      iSplitArray.split('');
      console.log(iSplitArray);
      iSplitArray.forEach(function(element) {
        if(element === "1") {
          iSplitArray = "Beep!";
          iSplitArray = numArray[i];
        }
      });
    }
  }
  return numArray;
}

// UI logic