function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    // return hours + ":" + minutes + ":" + seconds;
    return hours + ":" + minutes;
}

const loadTimer = () => {
  // dayjs.extend(window.dayjs_plugin_relativeTime)
  const timersEl = document.getElementById('timers')
  let timers = ['artifacts', 'crystals', 'cor lapis', 'wolfhook', 'juyeun chili', 'crab', 'meat']
  
  const inputEl = document.createElement("input")
  inputEl.classList.add('timer-input')
  timersEl.appendChild(inputEl)
  
  timers.forEach(id => {
    const div = document.createElement("div")
    div.classList.add('button')
    div.innerHTML = (`00:00 - ${id}`)
    timersEl.appendChild(div)
  
    div.addEventListener('click', (event) => {    
      div.innerHTML = 'saved'
      localStorage.setItem(`genshin_timer_${id}`, dayjs().format());
    })

    const now = dayjs()
    const timestamp = dayjs(localStorage.getItem(`genshin_timer_${id}`))
    div.innerHTML = `${msToTime(now.diff(timestamp))} - ${id}`
  
    setInterval(function(){ 
      const now = dayjs()
      const timestamp = dayjs(localStorage.getItem(`genshin_timer_${id}`))
      div.innerHTML = `${msToTime(now.diff(timestamp))} - ${id}`
    }, 1000 * 60); // update every minute  
  })
}

loadTimer()