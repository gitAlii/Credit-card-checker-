function validName(nameInput) {
  let words = nameInput.split(" ")// turns the name input into an ARRAY
  if (words.length < 2) { // checks if the array length is less than 2
     return false
  }
  return true
}

function validEmail(emailInput) {
  return emailInput.includes("@") && emailInput.endsWith(".com") // the email input must contain an @ and a .com at the end
}

function validCredCard(value) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm.
  let nCheck = 0, bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
  }

  return (nCheck % 10) == 0
}

function validInputs() {
  console.log("in func body") 
  let nameBox = document.getElementById("name").value  // here we are defining variables to be used in the functions above
  let emailBox = document.getElementById("email").value
  let credCardBox = document.getElementById("credit_card").value

  let everythingIsValid = true
  if (!validName(nameBox) || !validEmail(emailBox) || !validCredCard(credCardBox)) { // if any the functions above are flase, then return false.
      everythingIsValid = false // if any of the infomation is wrong, give false
  }
  if (!everythingIsValid) {
    console.log('wthh??')
      alert("Invalid inputs, try again.")
  }
  alert('Thanks for your Time.' )
}