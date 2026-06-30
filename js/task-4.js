const loginForm = document.querySelector('.login-form');
function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue === "" || passwordValue === "") {
        return alert('All form fields must be filled in');
    }
    const formData = {
        email: emailValue,
        password: passwordValue,
    };
    console.log(formData);
    event.currentTarget.reset();
}

loginForm.addEventListener('submit', handleSubmit);