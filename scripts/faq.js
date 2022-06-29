export function faqTable() {
  const faqContainer = document.querySelector('.faqs__boxes')
  const chevronLogo = document.querySelectorAll('.faq-chevron')
  const testText = document.querySelectorAll('.faq-modal')

  // testText.forEach(elem => elem.addEventListener('click', () => {
  //   chevronLogo.forEach(elem => elem.classList.remove('active'))
  //   testText.forEach(elem => elem.classList.remove('active'))
  // }))

  const choiseFaq = (e) => {
    let trg = e.target

    if (trg.tagName === 'BUTTON' || trg.tagName === 'SPAN') {

      chevronLogo.forEach(elem => {
        if (elem === trg || elem.parentNode === trg) {
          elem.classList.toggle('active')
        }
      })

      testText.forEach(elem => {
        if (elem.parentNode.contains(trg)) {

          elem.classList.toggle('active')

          // Удаляем окно с текстом, кликнув по нему
          elem.addEventListener('click', () => {
            elem.classList.remove('active')

            // Возвращаем курсор кнопки в исходное состояние
            chevronLogo.forEach(chevron => {
              if (chevron.parentElement === elem.previousElementSibling) {
                chevron.classList.remove('active')
              }
            })
          })
        }
      })
    } else {
      return
    }
  }

  faqContainer.addEventListener('click', choiseFaq)
}