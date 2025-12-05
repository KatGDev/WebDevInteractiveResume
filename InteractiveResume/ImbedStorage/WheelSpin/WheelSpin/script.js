const wheel = document.getElementById("wheel-color");
const button = document.getElementById("spin-button");
const textBox = document.getElementById("output-box");
const priorTextBox = document.getElementById("past-outcomes")

var colorNames = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "White"];
var colorInfo = {
    Red: "Love, Passion, Strength",
    Orange: "Freedom, Youth, Optimism",
    Yellow: "Joy, Warmth, Clarity",
    Green: "Luck, Health, Nature",
    Blue: "Trust, Loalty, Purpose",
    Purple: "Justice, Imagination, Mystery",
    Pink: "Respect, Calm, Softness",
    White: "Purity, Refreshing, Simplicity",
}
var priorSpins= [];

var totalRotation = 0;
var currentAngle = 0;
var slice = 360 / colorNames.length;
var pickedColor = 0;

function mod360(x) {
    var r = x % 360;
    return r<0?(r+360):r;
}

function centerAngle(i) {
    return i*slice+slice/2;
}

function SpinButton() {
    pickedColor=Math.floor(Math.random() * colorNames.length);
    var target = centerAngle(pickedColor);
    var spins = 4 * 360;
    var baseDelta = mod360(360-target-currentAngle) + spins;
    totalRotation= totalRotation + baseDelta;
    currentAngle=mod360(totalRotation);
    textBox.textContent="Spinning...";
    wheel.style.transform = "rotate("+totalRotation+"deg)";
    priorTextBox.textContent = priorSpins;

}

wheel.addEventListener("transitionend", function() {
    var colornamed = colorNames[pickedColor];
    var colorinformed = colorInfo[colornamed];
    var priorColor = `${colornamed}: ${colorinformed} | `
    textBox.textContent=`Your color was ${colornamed} and it means: ${colorinformed}`;
    button.textContent="Spin again?"
    priorSpins.push(priorColor);
});