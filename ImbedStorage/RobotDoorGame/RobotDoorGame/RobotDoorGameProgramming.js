let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let currentStreak = document.getElementById("currentStreak");
let bestStreak = document.getElementById("bestStreak");

let botDoorPath = "./images/robot.svg";
let beachDoorPath = "./images/beach.svg";
let spaceDoorPath = "./images/space.svg";
let closedDoorPath = "./images/closed_door.svg";

let numCloseDoors = 3;
let score = 0;
let highscore = 0;
currentStreak.innerHTML = score;
bestStreak.innerHTML = highscore;
let doorRoll = 0;

let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

let hintText = document.getElementById("hintText");
let hint = document.getElementById("hint");
let hintButton = document.getElementById("hintButton")

const doorOpeningSound = new Audio("./audio/open.mp3")

const playDoor = (door) => {
    numCloseDoors--;
    if (numCloseDoors == 0) {
        gameOver("win")
    } else if (isBot(door)) {
        gameOver("lose")
    }
}

const isClicked = (door) => {
    if (door.getAttribute("src") == closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

const isBot = (door) => {
    if (door.getAttribute("src" == botDoorPath)) {
        return true;
    } else {
        return false;
    }
}

const BehindDoor = () => {
    behindDoorGen = Math.floor((Math.random() * 3) + 1);
    console.log(behindDoorGen);
    switch (behindDoorGen) {
        case 1:
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = botDoorPath;
            doorRoll = 1;
            break;
        case 2:
            openDoor1 = spaceDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = botDoorPath;
            doorRoll = 2;
            break;
        case 3:
            openDoor1 = botDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = beachDoorPath;
            doorRoll = 3;
            break;
        case 4:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            doorRoll = 4;
            break;
        case 5:
            openDoor1 = beachDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = spaceDoorPath;
            doorRoll = 5;
            break;
        case 6:
            openDoor1 = spaceDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            doorRoll = 6;
            break;
    }
}

const startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good luck!';
    BehindDoor();
};

startButton.onclick = () => {
    startRound();
}

door1.onclick = () => {
    if (currentlyPlaying && !isClicked(door1)) {
        doorOpeningSound.play();
        door1.src = openDoor1;
    }
};

door2.onclick = () => {
    if (currentlyPlaying && !isClicked(door2)) {
        doorOpeningSound.play();
        door2.src = openDoor2;
    }
};

door3.onclick = () => {
    if (currentlyPlaying && !isClicked(door3)) {
        doorOpeningSound.play();
        door3.src = openDoor3;
    }
};

document.getElementById("instructionButton").addEventListener("click", function () {
    console.log("it work")
    if (document.getElementById("secondRow").style.display == "none") {
        document.getElementById("secondRow").style.display = "block";

    } else {
        document.getElementById("secondRow").style.display = "none";

    }

});

const gameOver = (str) => {
    if (str == "win") {
        startButton.innerHTML = "You Win! Try again?";
        getYourScore();
    } else {
        startButton.innerHTML = "You Lose! Try again?";
        score = 0;
        bestStreak.innerHTML = score;
    }
    currentlyPlaying = false;

};

const getYourScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highscore) {
        highscore = score;
        bestStreak.innerHTML = highscore;
    }
};

hintButton.onclick = () => {
    if (doorRoll == 1) {
        hintText.innerHTML = "The bot wont be behind door 1!"
    }
    else if (doorRoll == 2) {
        hintText.innerHTML = "The bot wont be behind door 2!"
    } 
    else if (doorRoll == 3) {
        hintText.innerHTML = "The bot wont be behind door 2!"
    }
    else if (doorRoll == 4) {
        hintText.innerHTML = "The bot wont be behind door 3!"
    }
    else if (doorRoll == 5) {
        hintText.innerHTML = "The bot wont be behind door 1!"
    }
    else if (doorRoll == 6) {
        hintText.innerHTML = "The bot wont be behind door 3!"
    }
}

startRound();