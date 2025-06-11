let factorA, factorB;
let correctAnswer;

function newQuestion() {
  factorA = Math.floor(Math.random() * 10) + 1;
  factorB = Math.floor(Math.random() * 10) + 1;
  correctAnswer = factorA * factorB;
  document.getElementById("question").innerText = `¿Cuánto es ${factorA} × ${factorB}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.innerText = "¡Correcto! 🌟 Sigue así 💪";
    document.getElementById("rewards").innerHTML += "🎉";
    setTimeout(newQuestion, 1500);
  } else {
    feedback.innerText = "Ups... Intenta otra vez 🐾";
  }
}

window.onload = newQuestion;