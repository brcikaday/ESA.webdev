let numbers = document.querySelectorAll(".number")
let screenInput = document.querySelector(".screen_input")
let operators = document.querySelectorAll(".operator")


numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        let buttonText = number.innerHTML
        screenInput.value += buttonText
        
    })
})

operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        let buttonText = operator.innerHTML
        if(buttonText === "="){
            try{
                screenInput.value = eval(screenInput.value)
            }catch(error){
                screenInput.value = "Error"
            }
        }else if(buttonText === "c"){
            screenInput.value = ""
        }else{
            screenInput.value += buttonText
        }
        
        
        
    })
})