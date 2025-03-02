// ------------------------------------- Time related problem are here ------------------------------------
let date = new Date()
let today = date.getDay()
let month = date.getMonth()

let weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let currentDay = weekDay[today]

let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let currntMonth = monthName[month]

let currntDate = date.getDate()
let currentYear = date.getFullYear()
let theDate = `${currntMonth} ${currntDate} ${currentYear}`


document.getElementById('toDay').innerText = `${currentDay} ,`
document.getElementById('fullTiem').innerText = theDate

// Activity log time setup

let utcTime = date.toLocaleString().split(' ')
let theTime = `${utcTime[1]} ${utcTime[2]}`