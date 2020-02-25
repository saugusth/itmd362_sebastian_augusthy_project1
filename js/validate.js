function validateForm1() {
  var a = document.forms["login_form"]["username"].value;
  var b = document.forms["login_form"]["psw"].value;

  if (a == "" || b == "") {
    alert("Fields cannot be empty");
    return false;
  } 
  else if (b.length < 8){
    alert("Password must be the same 8 or more character password you made when you signed up");
    return false;  	
  }
  else {
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
    alert("username must be more than 8 or more characters");
    return false;
  }
  else if (d.charAt(0) != d.charAt(0).toUpperCase()){
    alert("Password must start with capital letter");
    return false;	
  } 
  else if (d.length < 6){
    alert("Password must have 6 or more characters");
    return false;	  	
  }
  else {
    alert("You are now Signed-up in")
    return true;
  }  
}