/*
SIDE QUESTS:
- add timers
- dayjs tracking
- weekly tracking

*/

const daily = [
    {
        id: 'crystals',
        timer: 72,
        type: 'timer'
    },
    {
        id: 'artifacts',
        timer: 24,
        type: 'timer'
    },
    {
        id: 'commissions',
        type: 'daily'
    },
    {
        id: 'forging',
        type: 'daily'
    }
]

const dailyEl = document.getElementById('daily-reminder')

daily.forEach(function(item){
    const div = document.createElement('div')
    div.innerHTML = item.id
    div.classList.add('widget-button')
    dailyEl.appendChild(div)

    div.addEventListener('click', (event) => {
        // localStorage.setItem(`genshin_reminder_${item.id}`, dayjs().format());
    })
})


// click () {
//     if (done) {
//         delete timer out of localstorage
//         delete countdown
//     } else {
//         save current time into localstorage
//         start countdown timer
//     }    
// }

// on focus page () {
//     updateTimers()
// }

// every 10 minutes check () {
//     updateTimers()
// }

// function updateTimers() {
//     loop through all items {
//         check 
//     }
// }

