console.log("Welcome")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")
let sliderNumber = 1
const length = images.length

for (let i = 0; i < length; i++) {
  const div = document.createElement ("div"); 
  div.className = "button"
  bottom.appendChild(div)
  
}

const resetbg =()=>{
  buttons.forEach((e,index)=>{
 e.style.backgroundColor = "transparent"

  })
}

const buttons = document.querySelectorAll(".button")
buttons.forEach((element,index)=>{
  element.addEventListener("click",()=>{
    resetbg()
    element.style.backgroundColor = "gray"
    sliderNumber = index +1 
    slider.style.transform = `translateX(-${index * 500}px)`
  })
})
const nextSlide=()=>{
  slider.style.transform = `translateX(-${sliderNumber * 500}px)`
  sliderNumber++
}
const prevSlide=()=>{
  slider.style.transform = `translateX(-${(sliderNumber-2) * 500}px)`
  sliderNumber--
} 
const firstSlide=()=>{
  slider.style.transform = `translateX(0px)`
  sliderNumber=1
}

const lastSlide=()=>{
  slider.style.transform = `translateX(-${(length-1) * 500}px)`
  sliderNumber = length
}


right.addEventListener("click",()=>{{

  sliderNumber < length ? nextSlide():firstSlide()
  resetbg()
  buttons[sliderNumber-1].style.backgroundColor = "gray"
  
}})

left.addEventListener("click",()=>{{

  sliderNumber > 1 ? prevSlide():lastSlide()
  resetbg()
  buttons[sliderNumber-1].style.backgroundColor = "gray"
  
  
}})




