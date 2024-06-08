function getIp() {
    let ip = fetch('https://api.ipify.org?format=json'); // Note the added `?format=json`
    ip.then(res =>
            res.json()).then(d => {
            console.log(d);
        }) //.catch(err => console.error('Error fetching IP:', err));
}