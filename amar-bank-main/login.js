// step 1: add click handler with  the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('clicked');
// step 2: get the email address inside the email input field
// always remember to use ".value" to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// console.log(email);
// step 3: get password
// 3.1: set id on the html element,
// 3.2: get the element,
// 3.3: get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password);
// step 4: verify email and password and check weather valid user or not
if( email === 'mstrinkya@gmail.com' && password === '1234'){
    window.location.href = 'bank.html';
}
else{
   alert('invalid user');
}
})