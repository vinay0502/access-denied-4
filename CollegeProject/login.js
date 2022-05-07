// CODED BY ABHISHEK VERMA
var database = [
	{
		username: "Abhishek",
		password: "abhishek"
	},
	{ 
		username: "Akshay",
		password: "akshay"
	},
	{
		username: "Mannat",
		password: "mannat"
	},
    {
        username: "Arshita",
        password: "arshita"
    }

]

const hidden = document.getElementById("incorrect");

const openHome = () => {
    window.location.href = "homepage/homepage.html";
}

const checker = () => {
    var loginform = document.getElementById("login-form");
	const username = loginform.username.value;
	const password = loginform.password.value;

	for(var i = 0; i < database.length; i++) {
		if(username == database[i].username && password == database[i].password) {
			console.log(username + " is logged in!!!")
            openHome();
            return
		}
	}
	hidden.style.opacity = 1;
	hidden.style.color = red;
	hidden.style.border = solid;
}

const pass = document.getElementById("login-password");
pass.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
      checker();
    }
});

const change1 = () => {
	var i = document.getElementById("logo1");
	i.style.color = "#63FFB0";
}
const change2 = () => {
	var i = document.getElementById("logo2");
	i.style.color = "#63FFB0";
}
const back1 = () => {
	var i = document.getElementById("logo1");
	i.style.color = "#535353";
}
const back2 = () => {
	var i = document.getElementById("logo2");
	i.style.color = "#535353";
}