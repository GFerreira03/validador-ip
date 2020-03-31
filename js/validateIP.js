var ipVal = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

function validate(){
    if (ipVal.test(document.getElementById("input-id").value) == true){
        document.querySelector("body").style.background = "#1ba172";
        document.getElementById("is-valid").textContent = "VÁLIDO"
    } else {
        document.querySelector("body").style.background = "#E04255";
        document.getElementById("is-valid").textContent = "INVÁLIDO"
    }
}