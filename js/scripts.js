// Business logic
function beepBoop(input) {
  let numArray =[];
  for (let i = 0; i <= input; i++) {
    numArray.push(i.toString());
    for (let ind = 0; ind =< numArray.length; ind++) {
      if (numArray[ind] === "3") {
        numArray[ind] = "Won't you be my neighbor?";
      }
      else if (numArray[ind] === "2") {
        numArray[ind] = "Boop!";
      }
      else if (numArray[ind] === "1") {
        numArray[ind] = "Beep!";
      }
    }
  }
  return numArray;
}






//   let numArray = [];
//   for (i = 0; i <= input; i++) {
//     numArray.push(i);
//     if (i < 10) {
//       if(numArray[i] === 1) {
//         numArray[i] = "Beep!";
//       } 
//       else if (numArray[i] === 2) {
//         numArray[i] = "Boop!";
//       }
//       else if (numArray[i] === 3) {
//         numArray[i] = "Won't you be my neighbor?";
//       }
//     }
//     else {
//       let numString;
//       let iSplitArray = [];
//       numString = numArray[i].toString();
//       console.log(numString);
//       iSplitArray = numString.split('');
//       console.log(iSplitArray);
//       iSplitArray.forEach(function(element) {
//         if(element === "3") {
//           numArray[i] = "Won't you be my neighbor?";
//         }
//         else if(element === "2") {
//           numArray[i] = "Boop!";
//         }
//         else if(element === "1") {
//           numArray[i] = "Beep!";
//         }
//       });
//     }
//   }
//   return numArray;
// }

// UI logic