let btnNode = document.querySelectorAll('.color-btn')
let activityLog = document.getElementById('activity')
let taskAssign = document.getElementById('task-assign')
let checkBox = document.getElementById('checkbox')

for(let btn of btnNode){
    btn.addEventListener('click', function(e){
        alert('Board updated Successfully')

        let taskAsn = parseInt(taskAssign.innerText) - 1
        taskAssign.innerText = taskAsn

        let checkBx = parseInt(checkBox.innerText) + 1
        checkBox.innerText = checkBx

        let titel = e.target.parentNode.parentNode.querySelector('.title').innerText
        let para = document.createElement('p')
        para.classList.add('bg-[#f4f7ff]', 'py-2', 'px-4', 'rounded-lg', 'text-sm', 'text-gray-600', 'mt-3', 'mark')
        para.innerHTML = `
            <span>You have Complete The Task <span>${titel}</span></span> <span class="font-semibold">${theDate}</span> <span class="text-[9px] -m-[2px] text-gray-700">${theTime}</span>
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