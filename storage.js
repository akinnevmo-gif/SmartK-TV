function addWatchLater(video){
  let list=JSON.parse(localStorage.getItem("watchLater"))||[];
  list.push(video);
  localStorage.setItem("watchLater",JSON.stringify(list));
  alert("Added to Watch Later");
}

function addFavorite(video){
  let fav=JSON.parse(localStorage.getItem("favorites"))||[];
  fav.push(video);
  localStorage.setItem("favorites",JSON.stringify(fav));
  alert("Added to Favorites");
}
