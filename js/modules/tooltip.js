// tooltip no mapa da aplicacao

export default function intTooltip () {
// pegando o item com o atributo data tooltip
const tooltips = document.querySelectorAll('[data-tooltip]')


// adcionando o evento a cada tooltip
tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver)
});


// funcao para o event de passar o mouse sobre o elemento desejado
// criado a const tooltipBox para armazenar a invocação da funcao criarTooltipBox passando o this
// this se refere ao objeto do evento no caso o item 
function onMouseOver(event){
    
    // this referencia o event.
    const tooltipBox = criarTooltipBox(this)
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';
    

    // utilizando o objeto abaixo com sua handleEvent
    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)
    
    
}


// objetos criado como funcao, que contem funcao handleEvent como callback
const onMouseLeave =  {
    // tooltipBox: '',
    // element: '',

    handleEvent(event) {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave)
        this.element.removeEventListener('mousemove', onMouseMove)
    }
}

const onMouseMove = {

    // adcionando ao evento mousemove para manter ativo o toolbox, adcionado 20px para nao ficar piscando
    handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20+ 'px';
    }
}


// Function que cria a tooltipbox e adciona ao local correto e aplica seu style, retorna o seu valor tambem
function criarTooltipBox (element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
}


}

