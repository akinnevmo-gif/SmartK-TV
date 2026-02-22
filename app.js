// Theme toggle
document.getElementById("themeBtn").onclick=()=>{
document.body.classList.toggle("dark");
}

// Search
document.getElementById("search").addEventListener("input", e=>{
let value=e.target.value.toLowerCase();
document.querySelectorAll(".card").forEach(card=>{
card.style.display =
card.innerText.toLowerCase().includes(value)
? "block":"none";
});
});

// Filter
function filter(type){
document.querySelectorAll(".card").forEach(card=>{
if(type==="all" || card.dataset.cat===type)
card.style.display="block";
else
card.style.display="none";
});
}
