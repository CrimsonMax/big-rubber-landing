const introContainer = document.querySelector('.intro__images___indicator')
const introImages = document.querySelectorAll('.intro__images___container____pic')
const introDots = document.querySelectorAll('.intro__images___indicator____dot')

function changeImage(index) {
  introImages.forEach(elem => {
    elem.dataset.intro === index ? elem.style.opacity = '1' : elem.style.opacity = '0'
  })
}

function sortImage(event) {
  let block = event.target
  let index = block.dataset.dot

  if (block.classList.contains('indicator-active')) return

  document.querySelector('.indicator-active').classList.remove('indicator-active')
  block.classList.add('indicator-active')

  changeImage(index)
}


export function changeIntro() {
  introContainer.addEventListener('click', sortImage)
}

/* =====Автоматическая смена изображения================================================== */

function autoChange() {
  let index
  let point
  const check = num => num <= introImages.length - 1 ? num : 0


  introDots.forEach(elem => {

    if (elem.classList.contains('indicator-active')) {
      index = elem.dataset.dot
      elem.classList.remove('indicator-active')
      index++
      index <= 4 ? changeImage(index.toString()) : changeImage('1')
      point = index - 1
    }
  })
  
  introDots[check(point)].classList.add('indicator-active')
}

export function autoIntroImage() {
  setInterval(autoChange, 5000);
}