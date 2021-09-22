// Menu animais animation 
initTabNav = () => {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    const activeClass = 'ativo'
    if(tabMenu.length && tabContent.length) {
        // inserindo a classe ativo ao primeiro elemento por default
        tabContent[0].classList.add(activeClass)
        // Removendo todas as classes ativo e após isso é adcionado ao elemento clickado
        activeTab = index => {
            tabContent.forEach(section => {
                section.classList.remove(activeClass, )
            })
            const direcao = tabContent[index].dataset.anime
            tabContent[index].classList.add(activeClass, direcao)
        }
        // Adcionando o evento de click para cada item do menu
        tabMenu.forEach( (itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()

// FAQ animation
initAccordion = () => {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'
    
    if(accordionList.length) {
        // inserindo a classe ativo ao primeiro elemento por default
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)
        // adcionando a class ativo
    activeAccordion = event => {
        event.target.classList.toggle(activeClass)
        event.target.nextElementSibling.classList.toggle(activeClass)
    }
        // adcionando o evento de click para cada elemento
    accordionList.forEach(item => { 
        item.addEventListener('click', activeAccordion)
    })

    }

}

initAccordion()

// Smooth Scroll
initScrollSuave = () => {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    scrollToSection = event => {
        event.preventDefault()
        const href = event.target.getAttribute('href')
        const section = document.querySelector(href)
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        // metodo alternativo
       // const topo = section.offsetTop
       // console.log(section)
       // window.scrollTo({
       //     top: topo,
       //     behavior: "smooth"
       // })
    }
    linksInternos.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave()

// Animation scroll

initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.6
    
    animaScroll = () => {
        sections.forEach( section => {
            const sectionTop = section.getBoundingClientRect().top 
            const isSectionVisible = (sectionTop - windowMetade) < 0
    
            if(isSectionVisible){
                section.classList.add('ativo')
            } else {
                section.classList.remove('ativo')
            }
        })
    }
    
    animaScroll()
    window.addEventListener('scroll', animaScroll) 
}

initAnimationScroll()


