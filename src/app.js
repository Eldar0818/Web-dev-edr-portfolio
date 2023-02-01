let body = document.body
let darkLight = document.getElementById("dark-light")
let clickCount = 0
let serviceCard = document.querySelectorAll(".service-card")

darkLight.addEventListener('click', () => {

    body.classList.toggle("lightMode")

    if(clickCount % 2 === 1){
        darkLight.innerHTML = '<i class="fa-solid fa-sun"></i>'
        serviceCard.forEach(card => {
            card.classList.remove("light")
        })
    }else{
        darkLight.innerHTML = '<i class="fa-solid fa-moon"></i>'
        serviceCard.forEach(card => {
            card.classList.add("light")
        })
    }

    clickCount++
})

let messageForm = document.getElementById("message-form")

messageForm.addEventListener('submit', (e) => {

    e.preventDefault()

    window.location.href="thanks.html"
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})

let hiddenElements = document.querySelectorAll(".hidden")

hiddenElements.forEach((elm) => observer.observe(elm))