function getIp() {
    let ip = fetch('https://api.ipify.org?format=json'); 
    ip.then(res =>
            res.json()).then(d => {
            console.log(d);
        }) 
}
