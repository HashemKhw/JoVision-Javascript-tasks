function getIp() {
    let ip = fetch('https://api.ipify.org?formaat=json');
    ip.then(res =>
            res.json()).then(d => {

            document.getElementById("button1").innerText = d.ip;

        })
        .catch(error => {
            window.alert(error.message);
        });
}