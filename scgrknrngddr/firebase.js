import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyARS_5FSmCi9pIhc_uZhEDD3XYSvxmZTfE",
  authDomain: "secgorekneregedirdata.firebaseapp.com",
  projectId: "secgorekneregedirdata",
  storageBucket: "secgorekneregedirdata.firebasestorage.app",
  messagingSenderId: "361671593918",
  appId: "1:361671593918:web:5444831d3409dba5f973ef",
  measurementId: "G-6CW2Q957BR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.saveVote = async function (questionId, side) {
  const voteRef = doc(db, "votes", questionId);
  const snapshot = await getDoc(voteRef);

  if (!snapshot.exists()) {
    await setDoc(voteRef, {
      left: side === "left" ? 1 : 0,
      right: side === "right" ? 1 : 0
    });
  } else {
    await updateDoc(voteRef, {
      [side]: increment(1)
    });
  }

  const updatedSnapshot = await getDoc(voteRef);
  return updatedSnapshot.data();
};
