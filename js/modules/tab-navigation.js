// Menu animais animation 
export default function initTabNav ()  {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    const activeClass = 'ativo'
    if(tabMenu.length && tabContent.length) {
        // inserindo a classe ativo ao primeiro elemento por default
        tabContent[0].classList.add(activeClass)
        // Removendo todas as classes ativo e após isso é adcionado ao elemento clickado
        const activeTab = index => {
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
