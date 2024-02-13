function validateForm() {
  var name = document.getElementById("name").value;
  var car = document.getElementById("car").value;
  var car = document.getElementById("rent").value;


  if (name === "" || car === "" || rent === "") {
    document.getElementById("popupMessage").style.display = "block";
    return false;
  }
}

function closePopup() {
  document.getElementById("popupMessage").style.display = "none";
}


