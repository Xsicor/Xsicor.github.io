//==================
// Typing effect
//==================

const typeString = ['Python', 'JavaScript', 'ReactJS', 'Django', 'Webpack'];
let  i = 0;
let count = 0
let selectedText = '';
let text = '';


(function type() {
    if (count == typeString.length) {
      count = 0;
    };
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    document.getElementById('technology').innerHTML = text;
    if (text.length === selectedText.length) {
      count++;
      i = 0;
    }
    setTimeout(type, 600);
    sleep(300);
}());

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    }
    while (currentDate - date < milliseconds);
}
