// Smooth Scroll
export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    const scrollToSection = event => {
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
};
