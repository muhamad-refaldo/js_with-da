// bisa pake id
// bisa pake class

const btn1 = document.getElementById("btn1")
const btn2 = document.querySelector(".btn2")

console.log(btn1)

const defaultText = "klik saya 2"
btn2.textContent = defaultText;

btn1.style.border = "none"
btn1.style.backgroundColor = "red"
btn1.style.color = "white"
btn1.style.padding = "10px 20px"
btn1.style.cursor = "pointer"

console.log(btn2)

btn2.style.border = "none";
btn2.style.backgroundColor = "blue";
btn2.style.color = "white";
btn2.style.padding = "10px 20px";
btn2.style.cursor = "pointer";

// btn1.addEventListener("click", function () {
//   alert("button 1 ditekan")
// })

function gantiWarna() {
    btn2.style.backgroundColor = "green"
}

function ubahText() {
    btn2.textContent = "Button 2 diubah"
    btn2.style.backgroundColor = "blue"
    btn2.style.color = "red"
}

function textOri() {
    btn2.textContent = "klik saya 2"
    btn2.style.backgroundColor = "blue"
    btn2.style.color = "white"
    btn2.textContent
};

// tugas

// 1. jika di hover ada text dan jika keluar langsung textnya berwarna

const body = document.body;
const btn3 = document.getElementById("btn3")
const newText = document.createElement("b")
newText.textContent = "helo bung thanks dah di klik"

btn3.style.padding = "10px 20px"

function munculText() {
    body.append(newText)
}

function warnaText() {
    newText.style.color = "aqua"
}