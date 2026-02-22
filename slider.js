import { getDatabase, ref as dbRef, onValue } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-database.js";
import { database } from "./firebase.js";

const sliderContainer = document.getElementById("trendingSlider");

const uploadsRef = dbRef(database,"uploads");
onValue(uploadsRef, snapshot=>{
  const data = snapshot.val();
  if(!data) return;
  const uploadedVideos = Object.values(data);
  const latestUploads = uploadedVideos.slice(-10).reverse();

  sliderContainer.innerHTML="";
  latestUploads.forEach(v=>{
      const card = document.createElement("div");
      card.style.cssText="min-width:200px; flex:0 0 auto; background:#111; border-radius:8px; padding:8px; cursor:pointer;";
      const ext = v.url.split('.').pop().toLowerCase();
      let mediaHTML="";
      if(ext==="mp3"||ext==="wav"){ mediaHTML=`<audio controls src="${v.url}" style="width:100%;"></audio>`; }
      else{ mediaHTML=`<video controls src="${v.url}" style="width:100%; max-height:120px;"></video>`; }
      card.innerHTML=`${mediaHTML}<div class="title">${v.title}</div>`;
      sliderContainer.appendChild(card);
  });
});
