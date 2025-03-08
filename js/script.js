document.addEventListener("DOMContentLoaded", function () {
  // Check if we are on the index.html page
  let userForm = document.getElementById("user-form");
  if (userForm) {
    userForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let firstName = document.getElementById("first-name").value;
      let lastName = document.getElementById("last-name").value;
      let email = document.getElementById("email").value;
      let address = document.getElementById("address").value;
      let city = document.getElementById("city").value;
      let province = document.getElementById("province").value;
      let membership = document.querySelector(
        "input[name='membership']:checked"
      ).value;

      document.getElementById("output").innerHTML = `
        <p>Full Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}, ${city}, ${province}</p>
        <p>Membership: ${membership}</p>
      `;
    });
  }

  // Check if we are on the excel.html page
  let excelForm = document.getElementById("excel-form");
  if (excelForm) {
    excelForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let numbers = document
        .getElementById("numbers")
        .value.trim()
        .split(/\s+/)
        .map(Number);
      let operation = document.querySelector(
        "input[name='operation']:checked"
      ).value;
      let result;

      if (numbers.some(isNaN)) {
        result = "Invalid input. Please enter numbers separated by spaces.";
      } else {
        switch (operation) {
          case "sum":
            result = numbers.reduce((a, b) => a + b, 0);
            break;
          case "average":
            result = numbers.reduce((a, b) => a + b, 0) / numbers.length;
            break;
          case "max":
            result = Math.max(...numbers);
            break;
          case "min":
            result = Math.min(...numbers);
            break;
        }
      }
      document.getElementById("result").innerText = `Result: ${result}`;
    });
  }
});
