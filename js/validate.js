function validateForm1() {
  var a = document.forms["login_form"]["username"].value;
  var b = document.forms["login_form"]["psw"].value;

  if (a == "" || b == "") {
    alert("Fields cannot be empty");
    return false;
  } else {
    alert("You are now logged in")
    return true;
  }
}

function validateForm2() {
  var c = document.forms["sign-up_form"]["username"].value;
  var d = document.forms["sign-up_form"]["psw"].value;
  if (c == "" || d == "") {
    alert("Fields cannot be empty");
    return false;
  }
  else if (c.length < 8) {
    alert("username must be more than 8 characters");
    return false;
  }
  else if (d.charAt(0) != d.charAt(0).toUpperCase()){
    alert("Password must start with capital letter");
    return false;	
  } 
  else {
    alert("You are now Signed-up in")
    return true;
  }  
}