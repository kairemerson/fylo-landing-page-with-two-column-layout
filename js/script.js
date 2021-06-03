//alterar imagem de acordo com o tamanho da tela
var img = document.querySelector("#bg-curve")
window.onresize = function(){
    loadImg()
}
window.onload = function(){
    loadImg()
}
function loadImg(){
    if(screen.availWidth < 760){
        img.src = "./images/bg-curve-mobile.svg"
    }else{
        img.src = "./images/bg-curve-desktop.svg"
    }
}

//verificar email valido
const emailValid = (email) => {
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return emailRegex.test(email)
}
const startBtn = document.querySelector("#start") 
const earlyBtn = document.querySelector("#early")
var p = document.createElement("p")
var secondParagraph = document.createElement("p")
var count = 0
var count2 = 0
p.innerHTML = "Please check your email"
p.style.color = "red"
p.style.fontSize = "12px"
secondParagraph.innerHTML = "Please check your email"

startBtn.addEventListener("click", function(){
    const input = document.querySelector(".initial input").value
    if(input.length > 0){
        var result = emailValid(input)
    }
    if(!result){
        const startInput = document.querySelector(".initial input")
        if(count === 0){
            startInput.parentElement.appendChild(p)
            count++
        }
    }else{
        p.remove()
        count = 0
    }
    
})

earlyBtn.addEventListener("click", function(){
    const input = document.querySelector(".early-access input").value
    if(input.length > 0){
        var result = emailValid(input)
    }
    var earlyInput = document.querySelector(".early-access input")
    if(!result){
        if(count2 === 0){
            earlyInput.insertAdjacentElement("afterend",secondParagraph)
            //earlyInput.parentElement.appendChild(secondParagraph)
            earlyInput.style.border = "1px solid red"
            count2++
        }
    }else{
        secondParagraph.remove()
        earlyInput.style.border = "none"
        count2 = 0
    }

})

