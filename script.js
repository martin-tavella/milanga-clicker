console.log("pene");
const milBtn = document.getElementById("milBtn");
const counter = document.getElementById("counter");

let count = 0;

milBtn.addEventListener("click", () => {
    count++; 
    counter.textContent = count; 
});

if (count >= 100) {
    alert("You've unlocked a new Milanga. It's available in your inventory!");
}
