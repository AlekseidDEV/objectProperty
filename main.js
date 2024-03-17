
const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.createElement = function (){
    const sliceSelector = this.selector.slice(0, 1)

    let newElem = ''

    if(sliceSelector === '.'){
        newElem = document.createElement('div')
        newElem.classList.add(this.selector.slice(1))
    }else if(sliceSelector === '#'){
        newElem = document.createElement('p')
        newElem.setAttribute('id', this.selector.slice(1))
    }

    newElem.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
    `
}

const newElem = new DomElement('#selector', "100px", "300px", "#0dd144", "25px")
newElem.createElement()


