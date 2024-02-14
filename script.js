let themeBtn = document.getElementsByClassName("input")
let body = document.getElementById("body")
let calculator = document.getElementById("screen")

let themeName = localStorage.getItem("className")  || "theme1"

body.className = themeName

for(let i=0;i<themeBtn.length;i++){
    if(themeBtn[i].id===themeName){
        themeBtn[i].checked = true
    }
}

for(let i=0; i<themeBtn.length; i++){
    themeBtn[i].addEventListener("click",() => {
        body.className = themeBtn[i].id
        localStorage.setItem("className",themeBtn[i].id)
    })
}

function insert(n){
    calculator.value += n
}

function reset(){
    calculator.value = ''
}

function del(){
    calculator.value = (calculator.value).slice(0,calculator.value.length - 1)
}

function equalTo(){
    try{
        calculator.value = eval(calculator.value)
    } catch(err){
        alert("Please check numbers and math operations")
    }
}