const $form = document.querySelector("form");


const submitForm = (ev) => {
    const $form = ev.currentTarget;
    ev.preventDefault();

    const { elements: { email }
    } = $form;

    const { elements: { password }
    } = $form;

    if (!email.value) {
        return alert("Email jest wymagany");
    }

    if (!password.value) {
        return alert("Hasło jest wymagane");
    } 
    const wynik = {
        email: email.value,
        password: password.value
    }
    console.log(wynik);
    $form.reset();
}

$form.addEventListener("submit", submitForm);