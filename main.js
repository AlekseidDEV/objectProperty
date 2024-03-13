
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
    const newDiv = document.createElement('div')

    if(sliceSelector === '.'){
        newDiv.classList.add(this.selector.slice(1))
        newDiv.textContent = 'hello world'
        newDiv.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        position: absolute;
        `

        document.addEventListener('DOMContentLoaded', () => {
            document.body.append(newDiv)
            this.blockWalk(newDiv)
        })
    } else if(sliceSelector === '#'){
        newDiv.setAttribute('id', this.selector.slice(1))
        newDiv.textContent = 'hello world'
        newDiv.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        position: absolute;
        `

        document.addEventListener('DOMContentLoaded', () => {
            document.body.append(newDiv)
            this.blockWalk(newDiv)
        })
    }
}


const newElem = new DomElement('#selector', "100px", "100px", "#0dd144", "18px")
newElem.createElement()





