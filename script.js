const template = document.getElementById('template')
const towers = ['tower1', 'tower2', 'tower3']
const disks = ['disk1', 'disk2', 'disk3', 'disk4', 'disk5']
const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')
const reset = document.getElementById('reset')

let n = 4
let lastDisk
let counter = 0
let getdisk = false


easy.addEventListener('click', function () {
    message.innerText = ''
    template.innerHTML = ''
    createTemplate(3)
    counter = 0
    n = 3

})

medium.addEventListener('click', function () {
    message.innerText = ''
    template.innerHTML = ''
    createTemplate(4)
    counter = 0
    n = 4

})
hard.addEventListener('click', function () {
    message.innerText = ''
    template.innerHTML = ''
    createTemplate(5)
    counter = 0
    n = 5

})


reset.addEventListener('click', () => {
    template.innerHTML = ''
    message.innerText = ''
    createTemplate(n)
    counter = 0
    const tower1 = document.querySelector('.tower1')
    const disk1 = document.querySelector('.disk1')
    const disk2 = document.querySelector('.disk2')
    const disk3 = document.querySelector('.disk3')
    const disk4 = document.querySelector('.disk4')
    const disk5 = document.querySelector('.disk5')
    if (n === 3) {
        tower1.appendChild(disk1)
        tower1.appendChild(disk2)
        tower1.appendChild(disk3)

    } else if (n === 4) {
        tower1.appendChild(disk1)
        tower1.appendChild(disk2)
        tower1.appendChild(disk3)
        tower1.appendChild(disk4)

    } else if (n === 5) {
        tower1.appendChild(disk1)
        tower1.appendChild(disk2)
        tower1.appendChild(disk3)
        tower1.appendChild(disk4)
        tower1.appendChild(disk5)

    }

})


function createTemplate(n) {
    for (let index = 0; index < 3; index++) {
        const tower = document.createElement('div')
        tower.classList.add(towers[index])
        template.appendChild(tower)
        getdisk = false

        tower.addEventListener('click', movedisk)

    }
    const tower1 = document.querySelector(".tower1")
    for (let i = 0; i < n; i++) {
        const disk = document.createElement('div')
        disk.classList.add(disks[i])
        tower1.appendChild(disk)
    }

}

createTemplate(n)


function movedisk(e) {

    let tower = e.currentTarget

    if (getdisk === false) {
        lastDisk = e.currentTarget.lastElementChild
        getdisk = true

    } else if (tower.childElementCount === 0 || lastDisk.clientWidth < tower.lastElementChild.clientWidth) {
        getdisk = false
        tower.appendChild(lastDisk)
        counter++
        message.innerText = "Jogadas: " + counter
        phraseVictory()
    } else if (tower.childElementCount === 0 || lastDisk.clientWidth > tower.lastElementChild.clientWidth) {
        lastDisk = 0
        getdisk = false
        message.innerText = 'Não é possível colocar um disco maior sobre um menor'
    }


}

function phraseVictory() {
    const tower3 = document.querySelector('.tower3')
    if (tower3.childNodes.length === n) {
        message.innerText = "PARABÉNS, VOCÊ CONSEGUIU!!!"

    }
}





