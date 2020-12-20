const resinEl = document.getElementById('resin')
const inputEl = document.createElement("input")
let resinTimer = 0


const resinTimerEl = document.createElement("div")
resinEl.appendChild(resinTimerEl)

inputEl.setAttribute("type", "number")
inputEl.setAttribute("min", "0")
inputEl.setAttribute("max", "160")
inputEl.classList.add('resin-input')
inputEl.addEventListener('keyup', () => {
    resinTimer = msToTime( (160 - inputEl.value) * 8 * 60 * 1000 )
    resinTimerEl.innerHTML = resinTimer
})

resinEl.appendChild(inputEl)



/*
//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 5000;  //time in ms, 5 second for example
var $input = $('#myInput');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
  //do something
}
*/