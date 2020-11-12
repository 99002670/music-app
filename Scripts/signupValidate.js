function showErr(ele, msg) {
	document.getElementById(ele).innerText = msg;
}
function signupValidate() {
	let name = document.regForm.name.value;
	let email = document.regForm.email.value;
	let mobile = document.regForm.phone.value;
	let password = document.regForm.password.value;
	let confirmPassword = document.regForm.confirmPassword.value;

	if (name == "" || name == null) {
		showErr("errName", "Name is mandatory");
		return false;
	} else {
		showErr("errName", "");
	}

	if (email == "") {
		showErr("errEmail", "Email is mandatory");
		return false;
	} else {
		showErr("errEmail", "");
	}

	let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
	if (!regEx.test(email)) {
		showErr("errEmail", "Email is not in a valid format");
		return false;
	} else {
		showErr("errEmail", "");
	}

	if (mobile == "") {
		showErr("errPhone", "Phone number is mandatory");
		return false;
	} else {
		showErr("errPhone", "");
	}

	regEx = new RegExp(
		"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
	);
	if (!regEx.test(mobile)) {
		showErr(
			"errPhone",
			"Phone number is not in a valid format"
		);
		return false;
	} else {
		showErr("errPhone", "");
	}

	if (password == "") {
		showErr("errPassword", "Password is mandatory");
		return false;
	} else {
		showErr("errPassword", "");
	}

	if (password.length < 8) {
		showErr("errPassword", "Password must be atleast 8 charachters");
		return false;
	} else {
		showErr("errPassword", "");
	}

	if (confirmPassword != password) {
		console.log("***********");
		showErr("errConfirmPassword", "Password does not match");
		return false;
	} else {
		showErr("errConfirmPassword", "");
	}

	userRegister();
	return true;
}

function userRegister() {
	var id = 0;
	name_o = document.regForm.name.value;
	email_o = document.regForm.email.value;
	phone_o = document.regForm.phone.value;
	password_o = document.regForm.password.value;
	$.post("http://localhost:8000/userData", {
		name: name_o,
		email: email_o,
		password: password_o,
	  });
	id = id + 1;
	alert("Registered, Proceed to Login");
  }