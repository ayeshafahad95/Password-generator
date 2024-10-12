const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copy-Button");
const closeModel = document.querySelector(".close");

const generatePassword = () => {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase =
        document.getElementById("includeUppercase").checked;
    const includeLowercase =
        document.getElementById("includeLowercase").checked;
    const includeNumber = document.getElementById("includeNumber").checked;
    const includeSpecialchars = document.getElementById(
        "includeSpecialchars"
    ).checked;

    if (
        !includeLowercase &&
        !includeUppercase &&
        !includeNumber &&
        !includeSpecialchars
    ) {
        showNotificationModel("Please select at least one character set");
        return;
    }

    let charset = "";
    if (includeUppercase) {
        charset += "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumber) {
        charset += "0123456789";
    }
    if (includeSpecialchars) {
        charset += "!@#$%^&*(){:?><}|";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
};

const copyPassword = () => {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    showNotificationModel(
        `Password copied to clipboard: ${passwordField.value}`
    );
};

const showNotificationModel = (message) => {
    const model = document.getElementById("notificationModel");
    const notificationMessage = document.getElementById("notificationMessage");
    notificationMessage.textContent = message;
    model.style.display = "block";
};

const closeModelFunc = () => {
    const model = document.getElementById("notificationModel");
    model.style.display = "none";
};

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
closeModel.addEventListener("click", closeModelFunc);
