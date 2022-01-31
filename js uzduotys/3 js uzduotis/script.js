//1uzduotis
var div1 = document.getElementById('div1');
var button1 = document.getElementById('button1');

var button1Clicked = () => {
    div1.innerHTML = "Mėgstu programuoti.Yey";
}

button1.addEventListener('click', function () {
    button1Clicked();
});

//2 uzduotis
var button2 = document.getElementById('button2');
var div2 = document.getElementById('div2');

button2.addEventListener("click", function () {
    var name = document.querySelector('input[placeholder=Pavadinimas]').value;
    var price = document.querySelector('input[placeholder=Kaina]').value;
    var quantity = document.querySelector('input[placeholder=Kiekis]').value;

    var fullPrice = price * quantity;

    div2.innerHTML += quantity + " " + name + " viso kainuoja: " + fullPrice + "EUR<br>";
});

//3 uzduotis
var div3 = document.getElementById('heroes');
var button3 = document.getElementById('button3');

var heroes = [
    {
        name: "SuperMan",
        skill: "Flying"
    },
    {
        name: "Deadpool",
        skill: "Undead"
    },
    {
        name: "Homer Simpson",
        skill: "Drinking beer"
    },
    {
        name: "Goku",
        skill: "Kamehameha"
    },
    {
        name: "Iron-Man",
        skill: "Smart"
    }
];

button3.addEventListener("click", function () {
    var number = 1;
    heroes.forEach(hero => {
        if (number % 2 == 0) {
            div3.innerHTML += "<span style='background-color: blue; color: white'>" + number++ + ". NAME: " + hero.name + ". SKILL: " + hero.skill + "</span><br>";
        } else {
            div3.innerHTML += "<span>" + number++ + ". NAME: " + hero.name + ". SKILL: " + hero.skill + "</span><br>";
        }
    });
});
