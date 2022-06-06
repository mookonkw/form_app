document.body.style.backgroundColor = "#F0F2F5";
document.getElementById("header").style.textAlign = "center";
document.getElementById("footer").style.textAlign = "center";

//trying to refer to result.html's DOM (didnt work)
document.getElementById("hder").style.textAlign = "center";


const form = document.querySelector('#create_form');

//callback method to submit form
form.addEventListener('submit',(event) =>{
    // stop submiting form
    //event.preventDefault();

    validateform();
});

function validateform() {
    //validate username
    const username = document.querySelector('#username');
    if(username.value.trim()=='') {
        alert('Name cannot be empty');
        return false;
    }

    //validate password
    let password = document.querySelector('#password');
    if (password.value.trim().length >=9) {
        alert("Your password must be 9 or more characters long");
        return false;
    }

    //validate email
    let email = document.querySelector('#email');
    if(email.value.trim()=='') {
        alert('Please enter valid address');
        return false;

    }
    //set birthday
    let birthday = document.querySelector('#birthday');

    //set Zodiac
    let sign = document.querySelector('#sign');
    
}

document.getElementById("Full_name").innerHTMl= username;
{/* <p id ="Age"></p>
<p id ="Email"></p>
<p id ="Password"></p> */}
