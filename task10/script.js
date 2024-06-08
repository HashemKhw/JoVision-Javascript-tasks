function getIp() {
    let ip = fetch('https://api.ipify.org?format=json');
    ip.then(res =>
        res.json()).then(d => {

        document.getElementById("button1").innerText = d.ip;

    })
}