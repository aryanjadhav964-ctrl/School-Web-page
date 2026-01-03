function subscribe() {
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter an email address");
    } else {
        alert(`Thank you for subscribing: ${email}`);
        document.getElementById("email").value = "";
    }
}
