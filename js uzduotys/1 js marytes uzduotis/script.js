var jonukoObuoliai = 5;
var marytesObuoliai = 3;
var bendraiObuoliai = jonukoObuoliai + marytesObuoliai;

console.log("1. UŽDUOTIS");
console.log("Jonas turi " + jonukoObuoliai + " obuolius");
console.log("Marytė turi " + marytesObuoliai + " obuolius");
console.log("Viso bendrai obuoliu: " + bendraiObuoliai);

console.log("---");
console.log("2. UŽDUOTIS");
bendraiObuoliai += 2;
console.log("Padidinus kintamąjį: " + bendraiObuoliai);
bendraiObuoliai -= 5;
console.log("Pamažinus kintamąjį: " + bendraiObuoliai);

console.log("---");
console.log("3. UŽDUOTIS");
if (jonukoObuoliai > marytesObuoliai) {
    console.log("Jonas turi daugiau obuolių negu Marytė");
} else if (jonukoObuoliai < marytesObuoliai) {
    console.log("Marytė turi mažiau obuolių negu Jonas");
} else if (jonukoObuoliai === marytesObuoliai) {
    console.log("Obuolių kiekis vienodas. Atiduokime obuolius Editai.");
} else {
    console.log("Kas ta Edita?");
}

console.log("---");
console.log("4. UŽDUOTIS");
switch (bendraiObuoliai) {
    case 4:
        console.log("Jūs turite " + bendraiObuoliai + " obuolius");
        break;
    case 5:
        console.log("Jūs turite " + bendraiObuoliai + " obuolius");
        break;
    case 6:
        console.log("Jūs turite " + bendraiObuoliai + " obuolius");
        break;
    case 7:
        console.log("Jūs turite " + bendraiObuoliai + " obuolius");
        break;
    default:
        console.log("Obuolių kiekis nėra nurodytas standatiniuose variantuose.");
        break;
}

console.log("---");
console.log("5. UŽDUOTIS");
var vaisiuMasyvas = ["Mango", "Obuolys", "Bananas", "Kriaušė", "Apelsinas", "Melionas"];
console.log(vaisiuMasyvas);
console.log("Trecias masyvo elementas: " + vaisiuMasyvas[2]);
console.log("Penktas masyvo elementas: " + vaisiuMasyvas[vaisiuMasyvas.length - 2]);

console.log("---");
console.log("6. UŽDUOTIS");
console.log("Visi vaisiai for cikle:");
for (i = 0; i < vaisiuMasyvas.length; i++) {
    console.log(vaisiuMasyvas[i]);
}

console.log("---");
console.log("PABAIGA");



var uzduotiesPav = document.getElementById("uzduotiesPav");

uzduotiesPav.addEventListener("click", function (e) {
    if (uzduotiesPav.style.backgroundColor === 'red') {
        uzduotiesPav.style.backgroundColor = 'green';
    } else {
        uzduotiesPav.style.backgroundColor = 'red';
    }
});
