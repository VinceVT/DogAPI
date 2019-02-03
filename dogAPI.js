


function ajaxGet(url, functionName) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://dog.ceo/api/breeds/list", true);
    ajax.onload = functionName;
    ajax.send();
}

function ajaxPost(data, functionName) {
    var ajax = new XMLHttpRequest();
    var url =  "https://dog.ceo/api/breed/" + data + "/images/random";
    ajax.onload = functionName;
    ajax.open("POST", url, true);
    ajax.send(data);
}

window.onload = () => {
    var url = "https://dog.ceo/api/breeds/list";
    ajaxGet(url, dogList);
    document.getElementById("dropdown").onchange = run;
}

function run() {
    var sel = document.getElementById("dropdown");
    var strUser = sel.options[sel.selectedIndex].value;
    clickedDog(strUser);
}

function dogList() {
    var json = JSON.parse(this.responseText);
    var jmessage = json.message;
    for (var i = 0; i < jmessage.length; i++) {
        var dog = document.createElement("option");
        //project.innerHTML = jmessage[i].message;
        dog.text = jmessage[i];
        dog.value = jmessage[i];
        document.getElementById("dropdown").add(dog);
    }
}

function clickedDog(value) {
    ajaxPost(value, postDog);
}

function postDog() {
    var json = JSON.parse(this.responseText);
    /*var ajax = new XMLHttpRequest();
    var url =  "https://dog.ceo/api/breed/" + this.value + "/images/random";
    ajax.open("GET", url, true);
    */
    var canvas = document.getElementById('picture');
    var mapSprite = new Image();
    mapSprite.onload = function() {
        canvas.appendChild(mapSprite);
    };
    mapSprite.src = json.message;
}
