setInterval(showTime, 1000)

function showTime(){
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()

    let currentTime = `${hour}:${minute}`
    document.querySelector(".main").innerHTML = currentTime
}