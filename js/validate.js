function validateForm() {
  var a = document.forms["login_form"]["username"].value;
  var b = document.forms["login_form"]["psw"].value;
  var c = document.forms["sign-up_form"]["username"].value;
  var d = document.forms["sign-up_form"]["psw"].value;
  if (a == "" || b == "") {
    alert("Fields cannot be empty");
    return false;
  } else {
    alert("You are now logged in")
    return true;
  }

  if (c == "" || d == ""){
    alert("Fields cannot be empty");
    return false;
  }
  else{
    alert("You are now logged in")
    return true;  	
  }
}