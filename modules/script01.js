const sqlite3 = require('sqlite3').verbose();
// import sqlite3 from 'sqlite3';
const loginTab = document.querySelector('.login_tab')
const signupTab = document.querySelector('.signup_tab')
const toggleSignupLogin = document.querySelector('.toggle_form_container')


let db = new sqlite3.Database('../database/sample.db')
function handleUserSignup(){
    db.run()
}


document.addEventListener('click', function (e) {

    if (e.target && e.target.id == 'loginBtn') {
        // fetching email and pass 
        const loginUser = document.querySelector('#user_email')
        const loginPass = document.querySelector('#user_pass')

        if (loginUser && loginPass) {
            console.log(loginUser.value, loginPass.value)
            console.log('login sucessful')

            document.querySelector('.navbar_container').innerHTML = navbarModal

            let user = document.querySelector('.name_container')
            user.innerHTML = ''
            user.innerHTML = loginUser.value

        } else {
            console.log('Enter credentials')
        }
    }

    if (e.target && e.target.id == 'signupBtn') {
        const signupFullName = document.querySelector('#user_fullname')
        const signupUserName = document.querySelector('#user_username')
        const signupUserPass = document.querySelector('#user_pass')
        const signupUserConfirmPass = document.querySelector('#user_confirmpass')

        if (signupFullName && signupUserName && signupUserPass && signupUserConfirmPass) {
            console.log(signupFullName.value, signupUserName.value, signupUserPass.value, signupUserConfirmPass.value)
            console.log('signup sucessful')
        }
    }
})


if(loginTab || signupTab) {
    loginTab.addEventListener('click', function () {
        loginTab.classList.add('active')
        signupTab.classList.remove('active')
        
        toggleSignupLogin.innerHTML = ''
        toggleSignupLogin.innerHTML = loginModal
    })
    
    
    signupTab.addEventListener('click', function () {
        signupTab.classList.add('active')
        loginTab.classList.remove('active')
        
        toggleSignupLogin.innerHTML = ''
        toggleSignupLogin.innerHTML = signupModal
    })
}
    

// signup modal 
let signupModal = `
<div class="fullname_container input_container">
    <div class="image_container">
        <span class="material-icons">person_outline</span>
    </div>
    <input type="text" id="user_fullname" placeholder="Enter your full name">
</div>

<div class="username_container input_container">
    <div class="image_container">
        <span class="material-icons">person_outline</span>
    </div>
    <input type="text" id="user_username" placeholder="Enter your username">
</div>

<div class="password_container input_container">
    <div class="image_container">
        <span class="material-icons">lock</span>
    </div>
    <input type="password" id="user_pass" placeholder="Enter password">
</div>

<div class="password_container input_container">
    <div class="image_container">
        <span class="material-icons">lock</span>
    </div>
    <input type="password" id="user_confirmpass" placeholder="Confirm password">
</div>

<div class="button_container">
    <button class="signup" id="signupBtn">Sign up</button>
</div>`

// login modal 
let loginModal = 
`
<div class="username_container input_container">
    <div class="image_container">
        <span class="material-icons">person_outline</span>
    </div>
    <input type="email" id="user_name" placeholder="Enter your username">
</div>

<div class="password_container input_container">
    <div class="image_container">
        <span class="material-icons">lock</span>
    </div>
    <input type="password" id="user_pass" placeholder="Enter password">
</div>

<div class="options_container">
<div class="checkbox_container">
    <input type="checkbox">
    Remember me
</div>
<a href="#">Forgot your password?</a>
</div>

<div class="button_container">
<button class="login" id="loginBtn">Log in</button>
</div>
`

// navbar details
let navbarModal = `<div class="name_container">

</div>
<div class="dropdown_container">
<i class="arrow down"></i>
</div>
<div class="dropdown_link">
<a href="#">Reset Password</a>
<a href="#" class="logout">Logout</a>
</div>`

let links = document.querySelectorAll('.form_link')
for(var i in links){
    links[i].addEventListener('click', function(e){
        removeLinksClass()
        links[i].classList.add('forms_active')
    })
}

function removeLinksClass(){
    for(var i in links){
        if(links[i].classList.contains('forms_active'))
        links[i].classList.remove('forms_active')
    }
}