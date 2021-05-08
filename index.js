let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function (e) {

    //VALIDATION FOR CARD NUMBER

    let validationCardNumber = document.getElementById("validationCardNumber");

    if (validationCardNumber.value === "") {
        let cardNumberAlert = document.createElement("div");
        cardNumberAlert.className = "text-danger";
        cardNumberAlert.innerHTML = "<small>Please enter valid card number.</small>";
        document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
        validationCardNumber.className = "form-control border border-danger"
        e.preventDefault();
    }

    if (validationCardNumber.value.length !== 16 && validationCardNumber.value.length !== 0) {
        let cardNumberAlert = document.createElement("div");
        cardNumberAlert.className = "text-danger";
        cardNumberAlert.innerHTML = "<small>Card number should be 16 digits.</small>";
        document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
        validationCardNumber.className = "form-control border border-danger"
        e.preventDefault();
    }

    if (isNaN(validationCardNumber.value)) {
        let cardNumberAlert = document.createElement("div");
        cardNumberAlert.className = "text-danger";
        cardNumberAlert.innerHTML = "<small>Card number should only contain numbers.</small>";
        document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
        validationCardNumber.className = "form-control border border-danger"
        e.preventDefault();
    }

    // VALIDATION FOR CVC NUMBER

    let validationCVCNumber = document.getElementById("validationCVCNumber");

    if (validationCVCNumber.value === "") {
        let cvcNumberAlert = document.createElement("div");
        cvcNumberAlert.className = "text-danger";
        cvcNumberAlert.innerHTML = "<small>Please enter valid CVC number.</small>";
        document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
        validationCVCNumber.className = "form-control border border-danger"
        e.preventDefault();
    }

    if (validationCVCNumber.value.length !== 4 && validationCVCNumber.value.length !== 0) {
        let cvcNumberAlert = document.createElement("div");
        cvcNumberAlert.className = "text-danger";
        cvcNumberAlert.innerHTML = "<small>CVC number should be 4 digits.</small>";
        document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
        validationCVCNumber.className = "form-control border border-danger"
        e.preventDefault();
    }

    if (isNaN(validationCVCNumber.value)) {
        let cvcNumberAlert = document.createElement("div");
        cvcNumberAlert.className = "text-danger";
        cvcNumberAlert.innerHTML = "<small>CVC number should only contain numbers.</small>";
        document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
        validationCVCNumber.className = "form-control border border-danger"
        e.preventDefault();
    }

    // VALIDATION FOR AMOUNT

    let validationAmount = document.getElementById("validationAmount");

    if (validationAmount.value === '' || isNaN(validationAmount.value)) {
        let amountAlert = document.createElement("div");
        amountAlert.className = "text-danger";
        amountAlert.innerHTML = "<small>Please enter valid amount.</small>";
        document.getElementById("amountDiv").appendChild(amountAlert);
        validationAmount.className = "form-control border border-danger"
        e.preventDefault();
    }

    // VALIDATION FOR FIRST NAME

    let validationFirstName = document.getElementById("validationFirstName");

    if (validationFirstName.value === '') {
        let firstNameAlert = document.createElement("div");
        firstNameAlert.className = "text-danger";
        firstNameAlert.innerHTML = "<small>Please enter valid name.</small>";
        document.getElementById("firstNameDiv").appendChild(firstNameAlert);
        validationFirstName.className = "form-control border border-danger"
        e.preventDefault();
    }

    // VALIDATION FOR LAST NAME

    let validationLastName = document.getElementById("validationLastName");

    if (validationLastName.value === '') {
        let lastNameAlert = document.createElement("div");
        lastNameAlert.className = "text-danger";
        lastNameAlert.innerHTML = "<small>Please enter valid lastname.</small>";
        document.getElementById("lastNameDiv").appendChild(lastNameAlert);
        validationLastName.className = "form-control border border-danger"
        e.preventDefault();
    }

    //VALIDATION FOR CITY

    let validationCity = document.getElementById("validationCity");

    if (validationCity.value === '') {
        let cityAlert = document.createElement("div");
        cityAlert.className = "text-danger";
        cityAlert.innerHTML = "<small>Please enter valid city.</small>";
        document.getElementById("cityDiv").appendChild(cityAlert);
        validationCity.className = "form-control border border-danger"
        e.preventDefault();
    }

    //VALIDATION FOR STATE

    let validationState = document.getElementById("validationState");

    if (validationState.value === '') {
        let stateAlert = document.createElement("div");
        stateAlert.className = "text-danger";
        stateAlert.innerHTML = "<small>Please select state.</small>";
        document.getElementById("stateDiv").appendChild(stateAlert);
        validationState.className = "form-control custom-select border border-danger"
        e.preventDefault();
    }

    //VALIDATION FOR POSTAL CODE

    let validationPostalCode = document.getElementById("validationPostalCode");

    if (validationPostalCode.value === '') {
        let postalCodeAlert = document.createElement("div");
        postalCodeAlert.className = "text-danger";
        postalCodeAlert.innerHTML = "<small>Please enter valid postal code.</small>";
        document.getElementById("postalCodeDiv").appendChild(postalCodeAlert);
        validationPostalCode.className = "form-control border border-danger"
        e.preventDefault();
    }

    if (isNaN(validationPostalCode.value)) {
        let postalCodeAlert = document.createElement("div");
        postalCodeAlert.className = "text-danger";
        postalCodeAlert.innerHTML = "<small>Postal Code should only contain numbers.</small>";
        document.getElementById("postalCodeDiv").appendChild(postalCodeAlert);
        validationPostalCode.className = "form-control border border-danger"
        e.preventDefault();
    }
});

let resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function (e) {
    document.getElementById("myForm").reset();
});
