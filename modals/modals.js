export let loginModal = 
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

export let signUpModal = 
`
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
</div>
`

export function navbarModal() {
return `
<div class="name_container">
    ${userName}
</div>
<div class="dropdown_container">
    <i class="arrow down"></i>
</div>
<div class="dropdown_link">
    <a href="#">Reset Password</a>
    <a href="#" class="logout">Logout</a>
</div>
`
}

export let formFillingPage = 
`
<div class="form_filling_container">
    <div class="form_filling_left_container">
        <div class="left_container_link">
            <a href="#" class="form_link forms_active"><span class="material-icons">home</span>Hello</a>
            <a href="#" class="form_link "><span class="material-icons">people_alt</span>Person List</a>
            <a href="#" class="form_link "><span class="material-icons">person_add</span>Add new personal</a>
            <a href="#" class="form_link "><span class="material-icons">feed</span>Forms List</a>
            <a href="#" class="form_link "><span class="material-icons">note_add</span>Add new form</a>
        </div>
    </div>
    <div class="form_filling_right_container">
    </div>
</div>
`