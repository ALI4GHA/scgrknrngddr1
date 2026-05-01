const FIREBASE_PROJECT_ID = "secgorekneregedirdata";
const FIREBASE_API_KEY = "AIzaSyARS_5FSmCi9pIhc_uZhEDD3XYSvxmZTfE";

function firestoreDocUrl(questionId) {
  return `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/votes/${encodeURIComponent(questionId)}?key=${FIREBASE_API_KEY}`;
}

function readIntField(fields, name) {
  if (!fields || !fields[name]) return 0;
  return Number(fields[name].integerValue || 0);
}

window.saveVote = async function (questionId, side) {
  const url = firestoreDocUrl(questionId);

  let left = 0;
  let right = 0;

  const getResponse = await fetch(url);

  if (getResponse.ok) {
    const existingDoc = await getResponse.json();
    left = readIntField(existingDoc.fields, "left");
    right = readIntField(existingDoc.fields, "right");
  }

  if (side === "left") {
    left++;
  } else {
    right++;
  }

  const saveResponse = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fields: {
        left: { integerValue: String(left) },
        right: { integerValue: String(right) }
      }
    })
  });

  if (!saveResponse.ok) {
    throw new Error("Firestore REST save failed");
  }

  return { left, right };
};
