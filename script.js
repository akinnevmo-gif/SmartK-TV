// ===== Main UI Engine =====

const grid = document.getElementById("videoGrid");

// Render video list
function renderList(list){
    grid.innerHTML = "";

    list.forEach(v=>{

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg">
            <div class="title">${v.title}</div>

            <button onclick="playVideo('${v.id}')">Play</button>
            <button onclick='addWatchLater(${JSON.stringify(v)})'>Watch Later</button>
            <button onclick='addFavorite(${JSON.stringify(v)})'>Favorite</button>
        `;

        grid.appendChild(card);
    });
}

// Initial load
renderList(videos);

// Search
function searchVideos(){
    const q = document.getElementById("search").value.toLowerCase();

    const filtered = videos.filter(v =>
        v.title.toLowerCase().includes(q)
    );

    renderList(filtered);
}

// Category Filter
function filterCategory(cat){

    if(cat === "All"){
        renderList(videos);
        return;
    }

    const filtered = videos.filter(v => v.cat === cat);
    renderList(filtered);
}
