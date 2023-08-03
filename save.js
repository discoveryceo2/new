//Collecting Data
//How to collect data from text boxes
var fname = document.getElementById('fname').value;
console.log(fname);

var lname = document.getElementById('lname').value;
console.log(lname);

var email = document.getElementById('email').value;
console.log(email);

//Getting selected value from a dropdown list
var country = document.querySelector('#country').value;
console.log(country);

//Getting value of checked radio button
var gender = document.querySelector('input[name="gender"]:checked').value;
console.log(gender);

//Selecting all checked Checkboxes
var hobbies = [];
var checkboxes = document.getElementsByName('hobbies[]');
for(var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked){
        hobbies.push(checkboxes[i].value);
    }
}
console.log(hobbies);

//addEventListener method
/*function displayAlert() {
    alert('You clicked on submit button')
}

document.getElementById('btn')
.addEventListener('click', displayAlert)
*/

document.getElementById('btn')
.addEventListener('click', function () {
    alert('You clicked on submit button');
});

document.getElementById('email')
.addEventListener('focus', function () {
    console.log(this)
    this.style.background = 'yellow';
});

document.getElementById('email')
.addEventListener('blur', function () {
    this.style.background = 'white';
});

//Javascript event handling
function displayAlert() {
    alert('Submit Button Clicked')
}

function changeBackground() {
    document.getElementById('fname').style.backgroundColor = 'yellow'
}