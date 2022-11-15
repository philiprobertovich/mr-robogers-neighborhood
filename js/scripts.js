// Business logic
function beepBoop(input) {
  let numArray =[];
  for (let i = 0; i <= input; i++) {
    numArray.push(i.toString() + " ");
  }
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i].includes("3")){
      numArray[i] = "Won't you be my neighbor? ";
    }
    else if (numArray[i].includes("2")) {
      numArray[i] = "Boop! ";
    }
    else if (numArray[i].includes("1")) {
      numArray[i] = "Beep! ";
    }
  }
  return numArray;
}


// UI logic
function getAndProcessFormData(event) {
  event.preventDefault();
  const input = document.getElementById("input").value;

  document.getElementById("output").removeAttribute("class");
  document.querySelector("span").innerText = beepBoop(input);
}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", getAndProcessFormData)
})