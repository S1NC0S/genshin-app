const resinEl = document.getElementById('resin')


const inputEl = document.createElement("input")
inputEl.setAttribute("type", "number")
inputEl.setAttribute("min", "0")
inputEl.setAttribute("max", "160")
inputEl.classList.add('resin-input')
inputEl.placeholder = 0
inputEl.addEventListener('keyup', () => {
    if (parseInt(inputEl.value) > 160) { console.log('asdasd'); inputEl.value = 160 }
    updateResinTimer()
})


const resinTimerEl = document.createElement("div")
resinTimerEl.classList.add('resin-timer')
let resinTimer = 0


resinEl.appendChild(inputEl)
resinEl.appendChild(resinTimerEl)


const updateResinTimer = () => {
  resinTimer = msToTime( (160 - inputEl.value) * 8 * 60 * 1000 )
  resinTimerEl.innerHTML = `${resinTimer} h <br/> until maxed resin`
}
updateResinTimer()





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