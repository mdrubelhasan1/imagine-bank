// step-1 add event handler with the submit button:
document.getElementById('btn-submit').addEventListener('click',function(){
// step-2. get the email address inside the email input field:
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
// step-3 get password:
// a. set id on the html element
// b. get the element
// c. get the value from the element
   const passWordField = document.getElementById('user-password');
   const password = passWordField.value;
  
// step-4 varify email and password:
    if(email === 'mdrubelhasan360@gmail.com' && password === '1234'){
        window.location.href = 'bank.html';
    }
    else{
       alert('Wrong user name or password');
    }
});