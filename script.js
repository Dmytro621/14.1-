const slide = document.querySelectorAll('div.slide')
const sliderPrewButton = document.getElementById('sliderPrewButton')
const sliderNextButton = document.getElementById('sliderNextButton')

let currentSlideIndex = 0

let lastSlide = slide.length - 1

sliderNextButton.addEventListener('click', slideNext)
sliderPrewButton.addEventListener('click', slidePrew)

function slideNext() {
    
    slide[currentSlideIndex].classList.remove('active')
    currentSlideIndex = (currentSlideIndex + 1) % slide.length
    slide[currentSlideIndex].classList.add('active')

    console.log(currentSlideIndex)

    if (currentSlideIndex > 0) {
        sliderPrewButton.style.display = 'block'
    } else {
         sliderPrewButton.style.display = 'none'
    }

    if (currentSlideIndex == lastSlide) {
        sliderNextButton.style.display = 'none'
    } else {
        sliderNextButton.style.display = 'block'
    }
}

function slidePrew() {
        slide[currentSlideIndex].classList.remove('active')
        currentSlideIndex = (currentSlideIndex - 1)
        slide[currentSlideIndex].classList.add('active')
        
    if (currentSlideIndex == 0) {
        sliderPrewButton.style.display = 'none'
    }

        if (currentSlideIndex == lastSlide) {
        sliderNextButton.style.display = 'none'
    } else {
        sliderNextButton.style.display = 'block'
    }
}