let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_nums = [];

function play() {
    let user_guess = parseInt(document.getElementById("guess").value);
    if (isNaN(user_guess) || user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    
    guessed_nums.push(user_guess);
    no_of_guesses++;

    if (user_guess < answer) {
        msg1.textContent = "Your guess is too low.";
    } else if (user_guess > answer) {
        msg1.textContent = "Your guess is too high.";
    } else {
        msg1.textContent = "Yay! You guessed it right!";
        msg2.textContent = "The number was: " + answer;
        msg3.textContent = "You guessed it in " + no_of_guesses + " guesses.";
        document.getElementById("guess_btn").disabled = true;
        document.getElementById("reset_btn").style.display = "block";
        return;
    }

    msg2.textContent = "No. of Guesses: " + no_of_guesses;
    msg3.textContent = "Guessed Numbers: " + guessed_nums.join(", ");
}

function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    no_of_guesses = 0;
    guessed_nums = [];
    msg1.textContent = "I am thinking of a number between 1-100. Can you guess it?";
    msg2.textContent = "No. of Guesses: 0";
    msg3.textContent = "Guessed Numbers: None";
    document.getElementById("guess").value = "";
    document.getElementById("guess_btn").disabled = false;
    document.getElementById("reset_btn").style.display = "none";
}
