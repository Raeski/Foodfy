const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cards');
const recipe = document.querySelectorAll('.recipe')


for (let card of cards) {
    card.addEventListener("click", function() {
        const photoId = card.getAttribute("id")  
        const title = card.querySelector('h2').textContent
        const title_sub = card.querySelector('p').textContent
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `assets/${photoId}.png`      
        modalOverlay.querySelector('.modal_title h2').innerHTML = title
        modalOverlay.querySelector('.modal_text p').innerHTML = title_sub
    })
}



closeModal = document.querySelector (".modal_close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

