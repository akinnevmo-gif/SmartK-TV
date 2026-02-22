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

window.addEventListener("DOMContentLoaded", () => {

const btn = document.getElementById("uploadBtn");

btn.addEventListener("click", async () => {

const file = document.getElementById("file").files[0];
const title = document.getElementById("title").value;
const category = document.getElementById("category").value;

if(!file){
alert("Select a file first");
return;
}

try{

const storageRef = ref(storage,"uploads/"+Date.now()+"_"+file.name);

await uploadBytes(storageRef,file);

const url = await getDownloadURL(storageRef);

await push(dbRef(db,"content"),{
title,
category,
url
});

alert("Upload successful!");

}catch(error){
console.error(error);
alert("Upload failed. Check console.");
}

});

});
