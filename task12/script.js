function obj() {
    const person = {};
    const date = new Date()
    person.Name = document.getElementById("name").value;
    person.Age = document.getElementById("age").value;
    person.timestamp = date;
    alert("your name is: " + person.Name + "\nyour age is: " + person.Age + "\ntimestamp: " + person.timestamp);

}