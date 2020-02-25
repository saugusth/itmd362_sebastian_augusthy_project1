function validateForm() {
  var x = document.forms["login_form"]["username"].value;
  var y = document.forms["login_form"]["psw"].value;
  if (x == "" || y == "") {
    alert("Fields cannot be empty");
    return false;
  }
  else{
  	alert("You are now logged in")
  }
}