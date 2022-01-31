var mokuHTML = document.getElementById("moku");

mokuHTML.style.width = "300px";
mokuHTML.style.height = "300px";
mokuHTML.style.margin = "auto";
mokuHTML.style.textAlign = "center";
mokuHTML.style.backgroundColor = "green";

mokuJS = document.createElement('div');
mokuJS.setAttribute("id", "moku");
mokuJS.style.width = "300px";
mokuJS.style.height = "300px";
mokuJS.style.margin = "auto";
mokuJS.style.textAlign = "center";
mokuJS.style.backgroundColor = "yellow";
mokuJS.innerHTML = 'VALIO PAVYKO';
document.body.appendChild(mokuJS);

var button = document.createElement('button');
button.innerHTML = 'Spaudaliukas';
button.setAttribute('id', 'spaudaliukas'); 
document.body.appendChild(button);

button.addEventListener("click", function() {
    this.style.display = 'none';
    mokuJS.style.display = 'none';
});

var karambaButton = document.getElementById("karamba");
karambaButton.style.display = "block";
karambaButton.style.margin = "0 auto";

karambaButton.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.style.height = "315px";
    frame.style.width = "560px";
    frame.style.display = "block";
    frame.style.margin = "0 auto";
    frame.setAttribute("src", "https://www.youtube.com/embed/XgSjoHgy3Rk");
    frame.setAttribute('title', 'Youtube video player');
    frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    frame.setAttribute('frameborder', "0");
    document.body.appendChild(frame);
});
