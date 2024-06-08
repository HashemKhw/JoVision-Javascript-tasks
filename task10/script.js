function getIp() {
    let ip = fetch('https://api.ipify.org?format=json');
    ip.then(res =>
            res.json()).then(d => {

            document.getElementById("button1").innerText = JSON.stringify(d);

        }) //.catch(err => console.error('Error fetching IP:', err));
}