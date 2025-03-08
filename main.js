const words = ["apple", "grape", "lemon", "mango", "peach"];
const targetWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
const gridContainer = document.getElementById("grid-container");

function submitGuess() {
    const input = document.getElementById("guess");
    let guess = input.value.toUpperCase();
    if (guess.length !== 5) return;

    let row = document.createElement("div");
    row.classList.add("grid");
    
    for (let i = 0; i < 5; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = guess[i];
        if (guess[i] === targetWord[i]) {
            cell.classList.add("correct");
        } else if (targetWord.includes(guess[i])) {
            cell.classList.add("present");
        } else {
            cell.classList.add("absent");
        }
        row.appendChild(cell);
    }
    
    gridContainer.appendChild(row);
    input.value = "";

    if (guess === targetWord) {
        alert("تبریک! شما کلمه را درست حدس زدید!");
    }
}