const spanPlayer = document.querySelector(".player");
const grid = document.querySelector(".grid");
const timer = document.querySelector(".timer");
const player = document.querySelector(".player");
const usernameInput = document.getElementById('username').value;
const savedName = localStorage.getItem(usernameInput);

const Deck = [
    "ace_of_clubs",
    "ace_of_spades",
    "ace_of_hearts",
    "ace_of_diamonds"
];

let firstCard = "";
let secondCard = "";

var time = 0;
var minutes = 0;


const startTimer = () => {
    thisloop = setInterval(() => {
        time = time + 1;
        if (time > 60) {
            minutes = minutes + 1;
            time = 0;
        }
        timer.innerHTML = `${minutes} minute(s) and ${time} second(s)`;
    },
        1000);
};

startTimer();

function nameSet() {
   player.innerHTML = `${usernameInput}:`;
   popup.style.display = "none"
}

const creatElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

const creatCard = (Deck) => {
    const card = creatElement('div', 'card');
    const front = creatElement('div', 'face front');
    const back = creatElement('div', 'face back');
    front.style.backgroundImage = `url('${Deck}.svg')`;
    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', Deck);//Note 13
    return card;
};

const revealCard = (event) => {
    //console.log("I am clicked!");
    const target = event.target;


    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        setTimeout(() => checkCards(), 2000);

    }

};

const loadGame = () => {
    popup.style.display = "flex";
    const repeatedCards = [...Deck, ...Deck];//Note 14
    const shuffledArray = repeatedCards.sort(() => Math.random() - 0.5);//Note 15
    shuffledArray.forEach((Deck) => {//Note 16
        const card = creatCard(Deck);
        grid.appendChild(card);
    });
};

loadGame();

let matchCount = 0;

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        matchCount = matchCount + 2;

        firstCard = "";
        secondCard = "";
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            firstCard = "";

            secondCard.classList.remove('reveal-card');
            secondCard = "";
        }, 1000
        );

    }

};

