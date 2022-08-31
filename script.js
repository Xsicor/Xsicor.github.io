//==================
// Typing effect
//==================

const typeString = ['Hello!', '你好!', 'Hola!', 'Bonjour!'];
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
    document.getElementById('greeting').innerHTML = text;
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
