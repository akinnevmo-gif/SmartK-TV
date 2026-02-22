// ===== Storage Features =====

// Save video to Watch Later
function addWatchLater(video){
    let list = JSON.parse(localStorage.getItem("watchLater")) || [];
    list.push(video);
    localStorage.setItem("watchLater", JSON.stringify(list));
    alert("Added to Watch Later");
}

// Save video to Favorites
function addFavorite(video){
    let fav = JSON.parse(localStorage.getItem("favorites")) || [];
    fav.push(video);
    localStorage.setItem("favorites", JSON.stringify(fav));
    alert("Added to Favorites");
}

// Load Watch Later list
function showWatchLater(){
    let list = JSON.parse(localStorage.getItem("watchLater")) || [];
    renderList(list);
}

// Load Favorites list
function showFavorites(){
    let fav = JSON.parse(localStorage.getItem("favorites")) || [];
    renderList(fav);
}
