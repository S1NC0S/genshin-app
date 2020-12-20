let d = new Date()
let day = d.getDay()
const modal = document.getElementById("modal")
const daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// display current date 
document.getElementById("currentDay").innerHTML = daynames[day]

// INITIATE HOVER TAGS
let loadRessource = (item) => {
  var div = document.createElement("div")
  div.classList.add("tag")
  div.innerHTML = `<img src="img/${data.itemImages[item]}"><p>${item}</p>`
  
  // fill in content
  document.getElementById("resources").appendChild(div)
  
  // Load list of item users on mouse over into modal box
  div.addEventListener('mouseover', (event) => {
    // unhide the modal box
    modal.classList.remove("hidden")
    // 
    let input = ""
    data.talents[item].forEach((tag) => {
      input += `<div class="tag"><img src="img/Character_${tag}_Thumb.png"><p>${tag}</p></div>`
    })
    // add it all to the modal box
    modal.innerHTML = `<div class="list">${input}</div>`
  })
  
  // hide modal box on mouse out
  div.addEventListener('mouseout', (event) => {
    modal.classList.add("hidden")
  })
}

loadRessource(data.week[day].talent[0])
loadRessource(data.week[day].talent[1])
loadRessource(data.week[day].weapon[0])
loadRessource(data.week[day].weapon[1])

/* make modal box follow mouse */
document.addEventListener('mousemove', (event) => {
  modal.style.transform = `translate(${event.clientX+5}px, ${event.clientY+5}px)`
});