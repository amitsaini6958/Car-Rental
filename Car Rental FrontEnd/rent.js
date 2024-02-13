
function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
  
    if (firstName === "" || lastName === "") {
      alert("Please enter your first and last name.");
      return false;
    }
  }