import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  initializeFirestore,
  doc,
  getDoc,
  setDoc,
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

const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
});

window.saveVote = async function (questionId, side) {
  const voteRef = doc(db, "votes", questionId);

  await setDoc(
    voteRef,
    {
      left: increment(side === "left" ? 1 : 0),
      right: increment(side === "right" ? 1 : 0)
    },
    { merge: true }
  );

  const updatedSnapshot = await getDoc(voteRef);
  return updatedSnapshot.data();
};
