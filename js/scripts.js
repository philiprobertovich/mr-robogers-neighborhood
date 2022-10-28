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
      let numString;
      let iSplitArray = [];
      numString = numArray[i].toString();
      console.log(numString);
      iSplitArray = numString.split('');
      console.log(iSplitArray);
      iSplitArray.forEach(function(element) {
        if(element === "1") {
          numArray[i] = "Beep!";
        }
      });
    }
  }
  return numArray;
}

// UI logic