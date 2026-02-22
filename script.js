// ===== Updated Render Function (YouTube + Uploaded Files) =====
function renderList(list){
    grid.innerHTML = "";

    list.forEach(v=>{

        const card = document.createElement("div");
        card.className = "card";

        // Detect if ID is a URL (uploaded file) or YouTube ID
        const isURL = v.id.startsWith("https://") || v.id.startsWith("http://");

        let mediaHTML = "";
        if(isURL){
            // For uploaded files, use audio or video element based on file extension
            const ext = v.id.split('.').pop().toLowerCase();
            if(ext === "mp3" || ext === "wav"){
                mediaHTML = `<audio controls src="${v.id}" style="width:100%;"></audio>`;
            } else {
                mediaHTML = `<video controls src="${v.id}" style="width:100%; max-height:180px;"></video>`;
            }
        } else {
            // Regular YouTube thumbnail
            mediaHTML = `<img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg">`;
        }

        card.innerHTML = `
            ${mediaHTML}
            <div class="title">${v.title}</div>
            ${!isURL ? `<button onclick="playVideo('${v.id}')">Play</button>` : ""}
            <button onclick='addWatchLater(${JSON.stringify(v)})'>Watch Later</button>
            <button onclick='addFavorite(${JSON.stringify(v)})'>Favorite</button>
        `;

        grid.appendChild(card);
    });
}
