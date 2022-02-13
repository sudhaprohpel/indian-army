import {loginModal, signUpModal, formFillingPage, navbarModal } from '../modals/modals.js'

const loginTab = document.querySelector('.login_tab');
const signupTab = document.querySelector('.signup_tab');
const toggleFormContainer = document.querySelector('.toggle_form_container')

function handleLoginTab() {
    console.log('login clicked')
    signupTab.classList.remove('active')
    loginTab.classList.add('active')

    toggleFormContainer.innerHTML = ''
    toggleFormContainer.innerHTML = loginModal
}

function handleSignupTab() {
    console.log('signup clicked')
    signupTab.classList.add('active')
    loginTab.classList.remove('active')

    toggleFormContainer.innerHTML = ''
    toggleFormContainer.innerHTML = signUpModal
}

function handleLoginForm(e) {
    const loginUserName = document.querySelector('#user_name')
    const loginUserPass = document.querySelector('#user_pass')

    if (loginUserName && loginUserPass) {
        document.querySelector('.login_form_container').remove()
        document.querySelector('.main_content_container').innerHTML = formFillingPage

        document.querySelector('.navbar_container').innerHTML = navbarModal(loginUserName.value)
        console.log(loginUserName.value, loginUserPass.value)
    }
}

function checkConfirmPassword(password, confirmPass) {
    return password == confirmPass
}

function handleSignupForm(e) {
    const signupUserFullName = document.querySelector('#user_fullname')
    const signupUserUserName = document.querySelector('#user_username')
    const signupUserPass = document.querySelector('#user_pass')
    const signupUserConfirmPass = document.querySelector('#user_confirmpass')

    if (!checkConfirmPassword(signupUserPass.value, signupUserConfirmPass.value)) {
        console.log('not same password')
    } else {
        console.log(signupUserFullName.value, signupUserUserName.value, signupUserPass.value, signupUserConfirmPass.value)
    }
}

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'loginBtn') {
        handleLoginForm()

    } else if (e.target && e.target.id == 'signupBtn') {
        handleSignupForm()
    }
})

loginTab.addEventListener('click', handleLoginTab)
signupTab.addEventListener('click', handleSignupTab)