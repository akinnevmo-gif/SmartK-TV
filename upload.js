import { storage, db } from "./firebase.js";

import {
ref,
uploadBytes,
getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

import {
ref as dbRef,
push
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const btn=document.getElementById("uploadBtn");

btn.onclick = async ()=>{

const file=document.getElementById("file").files[0];
const title=document.getElementById("title").value;
const category=document.getElementById("category").value;

if(!file) return alert("Select file");

const storageRef = ref(storage,"uploads/"+file.name);

await uploadBytes(storageRef,file);

const url = await getDownloadURL(storageRef);

await push(dbRef(db,"content"),{
title,
category,
url
});

alert("Uploaded!");
location.reload();
}
