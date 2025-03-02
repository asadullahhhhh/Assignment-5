// ------------------------------------- Main Area function are hear -------------------------------------

let btnNode = document.querySelectorAll('.color-btn')
let activityLog = document.getElementById('activity')
let taskAssign = document.getElementById('task-assign')
let checkBox = document.getElementById('checkbox')

for(let btn of btnNode){
    btn.addEventListener('click', function(e){
        alert('Board updated Successfully')

        let date = new Date()

        // Activity log time setup

        let udcTime = date.toLocaleString().split(' ')
        let theDime = `${udcTime[1]} ${udcTime[2]}`

        //main func here

        let taskAsn = parseInt(taskAssign.innerText) - 1
        taskAssign.innerText = taskAsn

        let checkBx = parseInt(checkBox.innerText) + 1
        checkBox.innerText = checkBx

        let titel = e.target.parentNode.parentNode.querySelector('.title').innerText
        let para = document.createElement('p')
        para.classList.add('bg-[#f4f7ff]', 'py-2', 'px-4', 'rounded-lg', 'text-sm', 'text-gray-600', 'mt-3', 'mark')
        para.innerHTML = `
            <span>You have Complete The Task <span>${titel}</span></span> <span class="font-semibold">${theDate}</span> <span class="text-[9px] -m-[2px] text-gray-700">${theDime}</span>
        `
        activityLog.appendChild(para)
        btn.setAttribute('disabled', true)
    })
}

// Remove element from the activity log
document.getElementById('remove').addEventListener('click', function(e){
    let itemList = document.querySelectorAll('.mark')
    for(let item of itemList){
       activityLog.removeChild(item)
    }
})

// The color picker 

document.getElementById('colorPicker').addEventListener('click', function(e){
    let red = Math.floor(Math.random() * 255).toString(16)
    let green = Math.floor(Math.random() * 255).toString(16)
    let blue = Math.floor(Math.random() * 255).toString(16)

    function hexChecker(color){
        if(color.length != 2){
            return `0${color}`
        }else{
            return color
        }
    }

    let newRed = hexChecker(red)
    let newGreen = hexChecker(green)
    let newBlue = hexChecker(blue)

    let hexCode = `#${newRed}${newGreen}${newBlue}`

    document.body.style.backgroundColor = hexCode
})