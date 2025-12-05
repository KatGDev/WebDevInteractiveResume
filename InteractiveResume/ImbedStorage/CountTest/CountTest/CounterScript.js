var counter = 0;

   function posBeep() {
      let ctx = new (window.AudioContext || window.webkitAudioContext)();
      let oscillator = ctx.createOscillator();
      oscillator.type = "square";   // square wave sounds more "beep-like"
      oscillator.frequency.value = 440; // 440 Hz = A4 note
      oscillator.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.2); // play for 0.2 sec
    }


    function playDing() {
      let ctx = new (window.AudioContext || window.webkitAudioContext)();
      let oscillator = ctx.createOscillator();
      let gain = ctx.createGain();
      oscillator.type = "sine";          // smooth sine wave
      oscillator.frequency.value = 880;  // pitch of the "ding"
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      // fade out smoothly
      gain.gain.setValueAtTime(1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 1); // 1 second long
    }

document.getElementById("decrease-Button").addEventListener("click",decreaseButton);
function decreaseButton() {
    counter--
    document.getElementById("count").innerHTML = counter;
    playDing();
}

document.getElementById("increase-Button").addEventListener("click",increaseButton);
function increaseButton() {
    counter++
    document.getElementById("count").innerHTML = counter;
    posBeep();
}

document.getElementById("reset-Button").addEventListener("click",resetButton);
function resetButton() {
    counter = 0;
    document.getElementById("count").innerHTML = counter;
}

document.getElementById("increase-5-Button").addEventListener("click",increase5Button);
function increase5Button() {
    counter = counter + 5;
    document.getElementById("count").innerHTML = counter;
    posBeep();
}

document.getElementById("decrease-5-Button").addEventListener("click",decrease5Button);
function decrease5Button() {
    counter = counter - 5;
    document.getElementById("count").innerHTML = counter;
    playDing();
}




