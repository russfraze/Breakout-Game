const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
    }
        
}

function addBlock() {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.bottom = '50px'
    block.style.left = '100px'
    grid.appendChild(block)
     
}

addBlock()


