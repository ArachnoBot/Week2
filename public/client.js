document.getElementById("submit-data").addEventListener("click", sendData)

function sendData() {
    text = document.getElementById("input-text").value

    fetch("/list", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({text}),
    })
}