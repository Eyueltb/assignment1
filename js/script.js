
const validMinValue = (value, minLength=2) => {
    return value.length < minLength ? false : true;
}
const validEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (!regEx.test(value)) ? false : true;
}
const  validPassword = (value) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return (regEx.test(value))? true : false;
}

const validConfirmPassword = (password, confirmPassword ) =>{
    return password === confirmPassword ? true : false;
}
const validPostalCode = (value, RequiredLength=5) => {
    return value.length === RequiredLength ? true : false;
}
const checkValidForm = (elements) => {
    let disable = false
    let errors = document.querySelectorAll('.is-invalid')
    let submitButton = document.querySelectorAll('.submit')[0]

    elements.forEach(element => {
        if(element.value === "" || errors.length > 0)
            disable = true
    })

    if(submitButton !== undefined)
        submitButton.disabled = disable
    if(!disable){
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const password = document.getElementById('regForm-password');
        const confirmPassword = document.getElementById('confirm-password');
        const dateOfBirth = document.getElementById('birthDate');
        const address = document.getElementById('address');
        const postalCode = document.getElementById('postalCode');
        let customer = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password,
            confirmPassword : confirmPassword,
            dateOfBirth : dateOfBirth,
            address : address,
            postalCode : postalCode
        }
        onSubmit(customer);
    }

}

const validateLength = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validMinValue(e.target.value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}
const validatePostalCode = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validPostalCode(e.target.value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}
const validateEmail = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validEmail(e.target.value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}

const validatePassword = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validPassword(e.target.value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}

const validateConfirmPassword = (element) => {
    element.addEventListener("keyup", function (e) {
        if (!validConfirmPassword(e.target.value, document.getElementById("regForm-password").value)) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}
const validateAge = (element) => {
    element.addEventListener("keyup", function (e) {
        let today = new Date();
        let isOver= new Date(element.value) < new Date(today.getFullYear()-18, today.getMonth(),today.getDate(),today.getHours(), today.getMinutes())
        if (!isOver) {
            e.target.classList.add("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "block"
            checkValidForm(forms)
        } else {
            e.target.classList.remove("is-invalid");
            document.getElementById(`${e.target.id}-error`).style.display = "none"
            checkValidForm(forms)
        }
    })
}
function setEventListeners  ()  {
    forms.forEach(element => {
        switch(element.id) {
            case "firstName":
                validateLength(element);
                break;
            case "lastName":
                validateLength(element);
                break;
            case "email" :
                validateEmail(element);
                break;
            case "regForm-password":
                validatePassword(element);
                break;
            case "confirm-password":
                validateConfirmPassword(element);
                break;
            case "birthDate":
                validateAge(element);
                break;
            case "address":
                validateLength(element);
                break;
            case "postalCode":
                validatePostalCode(element);
                break;
        }
    })
}
function onSubmit(customer) {
    console.log("submitted", customer);

}

var forms = document.querySelectorAll('.needs-validation')
setEventListeners()
checkValidForm(forms)



