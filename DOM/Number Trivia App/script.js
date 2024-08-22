const getFactBtn = document.getElementById("get-fact-btn");
const ranFactBtn = document.getElementById("ran-fact-btn");
const fact = document.querySelector(".fact");
const url = "http://numbersapi.com/";

const fetchFact = (num) => {
    const finalUrl = `${url}${num}`;
    fetch(finalUrl)
        .then(response => response.text())
        .then(data => {
            fact.style.display = "block";
            fact.innerHTML = `<h2>${num}</h2><p>${data}</p>`;
        })
        .catch(error => {
            fact.style.display = "block";
            fact.innerHTML = `<p class="msg">Error fetching the fact. Please try again later.</p>`;
        });
};

const getFact = () => {
    const num = document.getElementById("num").value;
    if (num) {
        if (num >= 0 && num <= 300) {
            fetchFact(num);
        } else {
            fact.style.display = "block";
            fact.innerHTML = `<p class="msg">Please enter a number between 0 and 300.</p>`;
        }
    } else {
        fact.style.display = "block";
        fact.innerHTML = `<p class="msg">The input field cannot be empty.</p>`;
    }
};

const getRandomFact = () => {
    const num = Math.floor(Math.random() * 301);
    fetchFact(num);
};

getFactBtn.addEventListener("click", getFact);
ranFactBtn.addEventListener("click", getRandomFact);
window.addEventListener("load", getRandomFact);