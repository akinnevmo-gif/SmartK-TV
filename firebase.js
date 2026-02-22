import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCei7PIT_uJDj0h5kgORxb2zzjQxq2Z00",
  authDomain: "smartk-tv.firebaseapp.com",
  databaseURL: "https://smartk-tv-default-rtdb.firebaseio.com",
  projectId: "smartk-tv",
  storageBucket: "smartk-tv.firebasestorage.app",
  messagingSenderId: "925233991480",
  appId: "1:925233991480:web:a231953f9f6ebffd033bcd",
  measurementId: "G-91JZX8CYN1"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { storage, database };
