function validateForm() {
  var x = document.forms["myForm"]["userName"].value;
  var y = document.forms["myForm"]["userPassword"].value;
  if (x == " ") {
    alert("username must be filled out");
	 return false;}
	
	if (y == " ") {
    alert("userPassword must be filled out");
	
    return false;
	}}
}


		