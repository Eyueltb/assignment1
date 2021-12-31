
const validMinValue = (value, minLength=2) => {
    return value.length < minLength ? false : true;
}
const validEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (!regEx.test(value)) ? false : true;
}
const  validPassword = (value) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return (!regEx.test(value)) ? false : true;
}

const validConfirmPassword = (password, confirmPassword ) =>{
    return password === confirmPassword ? true : false;
}
const validPostalCode = (value, RequiredLength=5) => {
    return value.length === RequiredLength ? true : false;
}
const isOver18 = (birthday)=> {
    /*console.log(birthday)
    console.log(birthday.value)
    var ageDiff = Date.now() - birthday.getTime();
    console.log("age Diff " +  ageDiff)
    return Date.now() -birthday.getTime() >= 18;*/
    //return new Date(birthday.value).getFullYear() + 18 < new Date().getFullYear() ? false : true;
    //var dob = new Date(birthday.value).getFullYear() + 18 < new Date().getFullYear() ? false : true;
    //var today = new Date()
    //bob.getFullYear() + 18 < 8 < today.getFullYear()
    var now = new Date();
    var today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    console.log(today)
    var dob = new Date(birthday.substring(6,10), birthday.substring(0,2)-1, birthday.substring(3,5));
    console.log(dob)
    return  dob.getFullYear() + 18 < today.getFullYear() ? false : true;

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
        const firstName = document.getElementById('regForm-firstName');
        const lastName = document.getElementById('regForm-lastName');
        const email = document.getElementById('regForm-email');
        const password = document.getElementById('regForm-password');
        const confirmPassword = document.getElementById('regForm-confirm-password');
        const dateOfBirth = document.getElementById('regForm-date-of-birth');
        let customer = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password,
            confirmPassword : confirmPassword,
            dateOfBirth : dateOfBirth
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
        /* var dob = new Date(element.value)
         var today = new Date()
         bob.getFullYear() + 18 < 8 < today.getFullYear()*/
        /* //get year, month, day
         var now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
         //var dob = year * 10000 + month * 100 + day * 1;
         //now - dob > 180000;
         console.log(now)*/
        //isOver18(e.target.value)
        if (!isOver18(e.target.value)) {
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
function setEventListeners1  ()  {
    forms.forEach(element => {
        switch(element.id) {
            case "regForm-firstName":
                validateLength(element);
                break;
            case "regForm-lastName":
                validateLength(element);
                break;
            case "regForm-email" :
                validateEmail(element);
                break;
            case "regForm-password":
                validatePassword(element);
                break;
            case "regForm-confirm-password":
                validateConfirmPassword(element);
                //checkValidForm(forms)
                break;
            case "regForm-date-of-birth":
                validateAge(element);
                break;
            case "regForm-address":
                validateLength(element);
                break;
            case "regForm-postalCode":
                validatePostalCode(element);
                break;
        }
    })
}
function onSubmit(customer) {
    console.log("submitted", customer);

}

var forms = document.querySelectorAll('.needs-validation')
setEventListeners1()
checkValidForm(forms)



