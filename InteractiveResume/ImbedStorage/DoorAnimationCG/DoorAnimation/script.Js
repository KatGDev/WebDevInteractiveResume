let door = document.getElementById("target");
let background = document.getElementById("background");

let doorRandom = 0;

let Galaxy = "bg.gif";
let City = "City.gif";
let Forest = "Forest.gif";

function RandomizeDoor () {
    doorRandom = Math.floor(Math.random() * 3);
    console.log(doorRandom);
    switch (doorRandom) {
        case 0:
            background.src = Galaxy;
            break;
        case 1:
            background.src = City;
            break;
        case 2:
            background.src = Forest;
            break;
    }
}

door.addEventListener("mouseover", () => {
    RandomizeDoor();
});