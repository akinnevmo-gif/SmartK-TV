import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-storage.js";
import { getDatabase, ref as dbRef, push, onValue } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-database.js";
import { storage, database } from "./firebase.js";

const uploadContainer = document.createElement("div");
uploadContainer.innerHTML = `
  <h3>Upload Your Content</h3>
  <input type="file" id="fileInput"><br><br>
  <input type="text" id="fileTitle" placeholder="Title"><br><br>
  <select id="fileCategory">
    <option value="Movies">Movies</option>
    <option value="Music">Music</option>
    <option value="Instrumental">Instrumental</option>
    <option value="News">News</option>
    <option value="History">History</option>
  </select><br><br>
  <button id="uploadBtn">Upload</button>
  <p id="uploadStatus"></p>
`;
document.body.insertBefore(uploadContainer, document.getElementById("videoGrid"));

document.getElementById("uploadBtn").addEventListener("click", async ()=>{
  const file = document.getElementById("fileInput").files[0];
  const title = document.getElementById("fileTitle").value.trim();
  const category = document.getElementById("fileCategory").value;
  const status = document.getElementById("uploadStatus");

  if(!file || !title){ alert("Select file & title"); return; }

  const fileRef = ref(storage, `uploads/${file.name}`);
  status.textContent="Uploading...";

  try{
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    await push(dbRef(database,"uploads"),{title,category,url});
    status.textContent="Upload successful!";
    document.getElementById("fileInput").value="";
    document.getElementById("fileTitle").value="";
  }catch(e){
    console.error(e);
    status.textContent="Upload failed!";
  }
});
