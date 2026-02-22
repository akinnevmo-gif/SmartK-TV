// ===== Video Player Controls =====

// Play video in popup
function playVideo(id){
    const frame = document.getElementById("playerFrame");
    const overlay = document.getElementById("playerOverlay");

    frame.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    overlay.style.display = "flex";
}

// Close popup
function closePlayer(){
    const frame = document.getElementById("playerFrame");
    const overlay = document.getElementById("playerOverlay");

    frame.src = "";
    overlay.style.display = "none";
}

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

function scrollToTop(){
    window.scrollTo({top:0, behavior:"smooth"});
}
