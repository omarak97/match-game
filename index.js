let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")
let count1 = 0
let count2 = 0

function inc_1h(){
    count1 += 1
    countHome.innerText = count1
}

function inc_2h(){
    count1 += 2
    countHome.innerText = count1
}
function inc_3h(){
    count1 += 3
    countHome.innerText = count1
}

function inc_1g(){
    count2 += 1
    countGuest.innerText = count2
}

function inc_2g(){
    count2 += 2
    countGuest.innerText = count2
}
function inc_3g(){
    count2 += 3
    countGuest.innerText = count2
}