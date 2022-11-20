
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("pre");
let totalEl = document.getElementById("total")

let count = 0;
let total = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    saveEl.innerText += count + "- ";
    total = total + count;
    totalEl.innerText = "FT: " + total;
    count = 0;
    countEl.innerText = count;
}


