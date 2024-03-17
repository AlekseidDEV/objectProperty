
const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.blockWalk = function(elem){
    const computedStyleElem = getComputedStyle(elem)

    let stepArrow = 10
    let curentStep

    document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight'){
            curentStep = +computedStyleElem.left.slice(0, -2) || 0
            elem.style.left = `${stepArrow + curentStep}px`
        } else if(e.key === 'ArrowLeft'){
            curentStep = +computedStyleElem.left.slice(0, -2) || 0
            elem.style.left = `${-stepArrow + curentStep}px`
        } else if(e.key === 'ArrowUp'){
            curentStep = +computedStyleElem.top.slice(0, -2) || 0
            elem.style.top = `${-stepArrow + curentStep}px`
        } else if(e.key === 'ArrowDown'){
            curentStep = +computedStyleElem.top.slice(0, -2) || 0
            elem.style.top = `${stepArrow + curentStep}px`
        }
    })
}

DomElement.prototype.createElement = function (){
    const sliceSelector = this.selector.slice(0, 1)

    let newElem = ''

    if(sliceSelector === '.'){
        newElem = document.createElement('div')
        newElem.classList.add(this.selector.slice(1))
        newElem.textContent = 'div'
    }else if(sliceSelector === '#'){
        newElem = document.createElement('p')
        newElem.setAttribute('id', this.selector.slice(1))
        newElem.textContent = 'paragraph'
    }

    newElem.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
    position: absolute;
    left: 0;
    top: 0;
    `

    document.addEventListener('DOMContentLoaded', (e) => {
        document.body.append(newElem)
        this.blockWalk(newElem)
    })
}


const newElem = new DomElement('#selector', "100px", "100px", "#0dd144", "18px")
newElem.createElement()





