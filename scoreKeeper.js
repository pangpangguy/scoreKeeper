const p1Button = document.querySelector("#p1Btn");
const p2Button = document.querySelector("#p2Btn");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#resetBtn");
const selectButton = document.querySelector("#selectBtn");

let p1Score = 0;
let p2Score = 0;
let winningScore = 1;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }

}
);

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
}
);

resetButton.addEventListener('click', resetGame);

selectButton.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

function resetGame() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-danger', 'has-text-success');

    p1Button.disabled = false;
    p2Button.disabled = false;

}