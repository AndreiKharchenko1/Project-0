function ProcessText() {
    let enteredtext = document.getElementById("Textinput").value;
    let length = enteredtext.length;
    let result = "";
  
    for (let i = length - 1; i >= 0; i--) {
      result += enteredtext[i];
    }
  
    document.getElementById("PT").innerHTML = result;
  }