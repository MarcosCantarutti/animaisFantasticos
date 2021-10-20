// FAQ animation
export default function initAccordion (){
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'
    
    if(accordionList.length) {
        // inserindo a classe ativo ao primeiro elemento por default
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)
        // adcionando a class ativo
    const activeAccordion = event => {
        event.target.classList.toggle(activeClass)
        event.target.nextElementSibling.classList.toggle(activeClass)
    }
        // adcionando o evento de click para cada elemento
    accordionList.forEach(item => { 
        item.addEventListener('click', activeAccordion)
    })

    }

}

