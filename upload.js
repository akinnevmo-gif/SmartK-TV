// ===== Global Upload Feature =====

import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-storage.js";
import { getDatabase, ref as dbRef, push } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-database.js";
import { storage, database } from "./firebase.js";

// Create upload form dynamically
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

// Upload button click
document.getElementById("uploadBtn").addEventListener("click", async () => {
  const fileInput = document.getElementById("fileInput");
  const title = document.getElementById("fileTitle").value.trim();
  const category = document.getElementById("fileCategory").value;
  const status = document.getElementById("uploadStatus");

  if (!fileInput.files[0] || !title) {
    alert("Please select a file and enter a title.");
    return;
  }

  const file = fileInput.files[0];
  const fileRef = ref(storage, `uploads/${file.name}`);

  status.textContent = "Uploading...";

  try {
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    // Add to database
    const dbReference = dbRef(database, "uploads");
    await push(dbReference, { title, category, url });

    status.textContent = "Upload successful!";
    fileInput.value = "";
    document.getElementById("fileTitle").value = "";

    // Refresh grid to show new upload
    loadUploads();

  } catch (err) {
    console.error(err);
    status.textContent = "Upload failed!";
  }
});

// Load uploads from Firebase
async function loadUploads() {
  const dbReference = dbRef(database, "uploads");
  dbReference.on("value", (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    const uploadedVideos = Object.values(data);
    // Merge uploaded with existing videos
    const allVideos = videos.concat(uploadedVideos.map(v => ({
      title: v.title,
      cat: v.category,
      id: v.url // use download URL as video ID for iframe embed
    })));
    
    renderList(allVideos);
  });
}

// Initial load
loadUploads();
