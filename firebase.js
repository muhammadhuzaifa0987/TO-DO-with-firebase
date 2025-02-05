import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiD6BhRrYtWYEuSd-dYvE_WPOKf_pybx8",
    authDomain: "smit-batch-011.firebaseapp.com",
    projectId: "smit-batch-011",
    storageBucket: "smit-batch-011.appspot.com",
    messagingSenderId: "174924784108",
    appId: "1:174924784108:web:a8314be9465f99de3aa0c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { app, db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc }