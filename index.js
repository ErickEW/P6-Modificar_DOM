var boxes = document.getElementsByClassName('box');

function changeColor(e) {

    var colors = ["blue-box", "red-box", "purple-box"];

    var i = Math.round(Math.random()*2);
    var color = colors[i];

    var box = e.target;

    box.className = box.className.replace("box-gray", "");
    box.className = box.className + " color";

}

for (let i = 0; i < boxes.length; i++) {
    var box = boxes[i];

    box.onclick = changeColor;

}