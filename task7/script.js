function getTime() {
    const time = new Date();
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    document.getElementById('time').textContent = `${hours}:${mins}:${secs}`;
}
setInterval(getTime, 1000);
getTime();