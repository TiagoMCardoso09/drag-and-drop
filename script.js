/* function log(message){
    console.log('> ' + message)
} */

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    /* log('Card: Start dragging') */

    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('isDragging')
}

function drag(){
    /* log('Card: Is dragging') */
}

function dragend(){
    /* log('Card: Stop drag') */

    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('isDragging')
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    /* log('Dropzone: Enter in zone') */
}

function dragover(){
    /* log('Dropzone: Over in zone') */

    this.classList.add('over')

    const cardBeginDraggen = document.querySelector('.isDragging')

    this.appendChild(cardBeginDraggen)
}

function dragleave(){
    /* log('Dropzone: Leave zone') */

    this.classList.remove('over')
}

function drop(){
    /* log('Dropzone: Dropped in zone') */

    this.classList.remove('over')
}