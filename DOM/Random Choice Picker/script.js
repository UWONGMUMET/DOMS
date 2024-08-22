const choicesInput = document.getElementById("choicesInput");
const resultElement = document.getElementById("result");
const pickButton = document.getElementById("pickButton");

const pickRandomChoice = () => {
    const choices = choicesInput.value.split(',')
        .map(choice => choice.trim())
        .filter(choice => choice);

    if (choices.length === 0) {
        resultElement.textContent = "Please enter at least one valid choice.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];

    resultElement.textContent = `Random Choice: ${randomChoice}`;
};

pickButton.addEventListener("click", pickRandomChoice);