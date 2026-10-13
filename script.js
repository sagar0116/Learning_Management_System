
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;

    document.getElementById("displayName").textContent = name;
    document.getElementById("dashboard").hidden = false;

    form.hidden = true;
});