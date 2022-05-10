let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

let headers = document.querySelector('header')
let menu_bars = document.getElementById('menu-bars')

const menuBar = () => {
    headers.classList.toggle('active')
    menu_bars.classList.toggle("fa-times")
}
document.onscroll = () => {
    header.classList.remove('active')
    menu_bars.classList.remove('fa-times')
}
// mode
let mode = document.getElementById('mode')

let home = document.querySelector('section')
let hC_h3 = document.querySelector('.home .content h3')
let info = document.querySelector('.info')
let about = document.querySelector('.about')
let para = document.querySelectorAll('.about .row1 .content p')
let contentH3 = document.querySelectorAll('.about .row1 .content h3')
let progressH3 = document.querySelectorAll('.about .row2 .skills .progress h3')
let service = document.querySelector('.service')
let project = document.querySelector('.project')
let contact = document.querySelector('.contact')
let footer = document.querySelector('.footer')
let footerText = document.querySelector('.footer span')
let headingAll = document.querySelectorAll('.heading')


const Modebtn = () => {
    mode.classList.toggle('fa-sun')
    mode.classList.toggle('yellow')
    home.classList.toggle('mode')
    hC_h3.classList.toggle('mode')
    info.classList.toggle('mode')
    about.classList.toggle('mode')

    para.forEach(e => {
        e.classList.toggle('mode')
    });

    contentH3.forEach(element => {
        element.classList.toggle('mode')
    });

    progressH3.forEach(e => {
        e.classList.toggle('mode')
    })

    service.classList.toggle('mode')
    project.classList.toggle('mode')
    contact.classList.toggle('mode')
    footer.classList.toggle('mode')
    footerText.classList.toggle('mode')

    headingAll.forEach(e => {
        e.classList.toggle('mode')
    })

}

// for custom cursor
let cursor1 = document.querySelector('.cursor1')
let cursor2 = document.querySelector('.cursor2')

document.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px'

    cursor2.style.top = e.pageY + "px"
    cursor2.style.left = e.pageX + "px"
}

let allLinks = document.querySelectorAll('a')

allLinks.forEach((links) => {

    links.onmouseenter = () => {
        cursor1.classList.add('active')
        cursor2.classList.add('active')
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active')
        cursor2.classList.remove('active')
    }
})

// time
let tHr = document.querySelector('.hr')
let tmin = document.querySelector('.min')
let tsec = document.querySelector('.sec')
let am_Pm = document.querySelector('.am-pm')


const dT = () => {
    let time = new Date();
    hr = time.getHours()
    mins = time.getMinutes()
    mins = mins < 10 ? "0" + mins : mins

    secs = time.getSeconds()
    secs = secs < 10 ? "0" + secs : secs

    AmPms = hr <= 12 ? " AM" : " PM"

    if (hr > 12) {
        hr = hr - 12
    }
    if (hr < 10) {
        hr = "0" + hr
    }

    tHr.textContent = hr
    tmin.textContent = mins
    tsec.textContent = secs
    am_Pm.textContent = AmPms
}
setInterval(dT, 1000)

// date
let Sdate = document.querySelector('.Sdate')
let date = new Date()
let show_date = date.toDateString()
Sdate.innerHTML = show_date
console.log(show_date);

// clock sound
let stopClockSound = document.getElementById('stopClockSound')
let auto_play_sound = new Audio('/audio/clock-sound.wav')

const showAlert = () => {
    alert('for play clock sound click on time and for stop clock sound click on date')

}

const playSound = () => {
        auto_play_sound.play()
}
const stopSound = () => {
   auto_play_sound.pause()
}

