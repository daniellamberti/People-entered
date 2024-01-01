let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("totalP");
let count = 0;
let totalPeople= 0;
totalPeople = count + totalPeople;

function increment() {
    count += 1
    totalPeople +=1;
    countEl.textContent = totalPeople;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += totalPeople + " - ";
}

function reset() {
    count = 0;
    totalPeople = 0;
    countEl.textContent = count;
    totalEl.textContent = "Total people entered: " + count;
}

function resetPrevious() {
    saveEl.textContent = "Previous entries: ";
}

function total() {
    totalEl.textContent += " " + totalPeople;
    if(count = 0) {
        totalPeople = 0;
    }
    
}
console.log("Let's count people on the subway!");
