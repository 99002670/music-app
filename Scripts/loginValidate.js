function showErr(ele, msg) {
	document.getElementById(ele).innerText = msg;
}
function loginValidate() {
	let email = document.regForm.email.value;
	let password = document.regForm.password.value;

	if (email == "" || null) {
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

	if (password == "" || password == null) {
		showErr("errPassword", "Password is mandatory");
		return false;
	} else {
		showErr("errPassword", "");
	}

	return true;
}

function enter() {
	email_c = document.regForm.email.value;
	password_c = document.regForm.password.value;
	$.get("http://localhost:3000/userData", (resp) => {
	  var status_flag = false;
	  resp.forEach((element) => {
		if (
		  email_c == `${element.email}` &&
		  password_c == `${element.password}` &&
		  status_flag == false
		) {
		  window.location = "home.html";
		  status_flag = true;
		} else {
		  //do nothing
		}
	  });
	  if (status_flag == false) {
		alert("Invalid Credentials");
	  }
	});
  }