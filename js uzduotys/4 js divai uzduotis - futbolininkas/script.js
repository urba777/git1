//1 užduotis
function Person(runningSpeed, name, surname, age, height) {
    this.runningSpeed = runningSpeed;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
}

var person1 = new Person(20, 'Antanas', 'Antanauskas', 32, 180);
var person2 = new Person(18, 'Jonas', 'Jonaitis', 30, 187);
var person3 = new Person(16, 'Petras', 'Petraitis', 28, 179);

var ul = document.getElementById('persons');
var allPersons = [];
allPersons.push(person1, person2, person3);

allPersons.forEach(person => {
    ul.innerHTML += "<li>" + person.name + " " + person.surname + "</li>";
});

var div1 = document.getElementById('fastestPerson');

if (person1.runningSpeed > person2.runningSpeed && person1.runningSpeed > person3.runningSpeed) {
    div1.innerHTML = person1.name + " " + person1.surname + " bėga greičiausiai.";
} else if (person2.runningSpeed > person1.runningSpeed && person2.runningSpeed > person1.runningSpeed) {
    div1.innerHTML = person2.name + " " + person2.surname + " bėga greičiausiai.";
} else if (person3.runningSpeed > person1.runningSpeed && person3.runningSpeed > person2.runningSpeed) {
    div1.innerHTML = person3.name + " " + person3.surname + " bėga greičiausiai.";
} else if (person2.runningSpeed === person1.runningSpeed && person1.runningSpeed === person3.runningSpeed) {
    div1.innerHTML =  "Visi bėga vienodu greičiu.";
} else {
    div1.innerHTML =  "Ooops. Kažkas blogai.";
}

//2 užduotis
function Car(name, speed, distance) {
    this.speed = speed;
    this.name = name;
    this.distance = distance;
}






