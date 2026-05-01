const DATABASE_URL = "https://secgorekneregedirdata-default-rtdb.europe-west1.firebasedatabase.app";

function safeQuestionId(questionId) {
  return questionId
    .replace(/[.#$[\]/]/g, "_")
    .slice(0, 700);
}

window.saveVote = async function (questionId, side) {
  const id = safeQuestionId(questionId);
  const url = `${DATABASE_URL}/votes/${id}.json`;

  const getResponse = await fetch(url);
  let data = {};

  if (getResponse.ok) {
    data = await getResponse.json();
  }

  let left = Number(data?.left || 0);
  let right = Number(data?.right || 0);

  if (side === "left") {
    left++;
  } else {
    right++;
  }

  const saveResponse = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ left, right })
  });

  if (!saveResponse.ok) {
    throw new Error("Realtime Database save failed");
  }

  return { left, right };
};
