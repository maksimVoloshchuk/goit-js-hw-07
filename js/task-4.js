const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = event.currentTarget.elements.email;
    const passswordInput = event.currentTarget.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passswordInput.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("All form fields must be filled in");
        return;
    }

    const formValue = {
        email: emailValue,
        password: passwordValue
    };
    console.log(formValue);
    form.reset();
});
