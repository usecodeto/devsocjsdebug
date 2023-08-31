let secretNumber = 5;
let highscore = 0;
let time = [0, 0];
let score = parseInt(document.querySelector('.score').textContent);
const again = document.querySelector('.again');
let timerInterval;

timerInterval = function () {
    time[1]++;
    if (time[1] % 60 === 0) {
        time[0]++;
    }
    document.querySelector(".timetaken").innerHTML = ` (${time[0]} : ${time[1] % 60}) `;
    document.querySelector(".timer").innerHTML = ` (${time[0]} : ${time[1] % 60}) `;
};

again.addEventListener("click", function (e) {
    e.preventDefault();
    time = [0, 0];
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('.timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    document.querySelector("body").style.backgroundColor = 'white';
    document.querySelector('.number').textContent = '?';
    score = 20;
    clearInterval(timerInterval);
});

document.querySelector('.check').addEventListener('click', function (e) {
    e.preventDefault();
    let guess = document.querySelector('.guess').value;

    setInterval(timerInterval, 1000);  // Update the timer display

    document.querySelector('.check').style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Valid input";
        document.querySelector('.guess').value = '';
        clearInterval(timerInterval);
    } else if (guess == secretNumber) {
        document.querySelector('.check').style.backgroundColor = '#f1356d';
        document.querySelector(".message").textContent = "You guessed it Right";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (highscore < score) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').focus();
        clearInterval(timerInterval);  
    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high";
        document.querySelector('.score').textContent--;
        score = score - 1;
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').focus();
    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "Too low ";
        document.querySelector('.score').textContent--;
        score = score - 1;
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').focus();
    }

    if (document.querySelector('.score').textContent <= 0) {
        document.querySelector(".message").textContent = "You lost the Game";
        // clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = '';
        document.querySelector('.number').textContent = secretNumber.toString();
        this.style.backgroundColor = '#f1356d';
    }
});
