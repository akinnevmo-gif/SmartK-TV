// ===== Firebase Initialization =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

// Export for other scripts
export { storage, database };
