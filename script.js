const grid = document.getElementById("videoGrid");

function renderList(list){
    grid.innerHTML = "";

    list.forEach(v=>{
        const card = document.createElement("div");
        card.className = "card";

        const isURL = v.id.startsWith("https://") || v.id.startsWith("http://");

        let mediaHTML = "";
        if(isURL){
            const ext = v.id.split('.').pop().toLowerCase();
            if(ext==="mp3"||ext==="wav"){
                mediaHTML = `<audio controls src="${v.id}" style="width:100%;"></audio>`;
            } else {
                mediaHTML = `<video controls src="${v.id}" style="width:100%; max-height:180px;"></video>`;
            }
        } else {
            mediaHTML = `<img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg">`;
        }

        card.innerHTML = `
            ${mediaHTML}
            <div class="title">${v.title}</div>
            ${!isURL?`<button onclick="playVideo('${v.id}')">Play</button>`:""}
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
    const filtered = videos.filter(v => v.title.toLowerCase().includes(q));
    renderList(filtered);
}

// Category filter
function filterCategory(cat){
    if(cat==="All"){ renderList(videos); return; }
    const filtered = videos.filter(v=>v.cat===cat);
    renderList(filtered);
}
