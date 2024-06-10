function obj() {
    const person = {};
    person.Name = document.getElementById('name');

    const requestPromise = new Promise((resolve, reject) => {
        fetch(`https://api.agify.io?name=${person.Name}`)
            .then(response => {
                if (!response.ok) {
                    reject(new Error('error: ' + response.statusText));
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });

    requestPromise
        .then(data => {
            person.Age = data;
            alert(`Your name is: ${person.Name}\nYour age is: ${person.Age}`);
        })
        .catch(error => {
            alert('error: ' + error.message);
        });
}