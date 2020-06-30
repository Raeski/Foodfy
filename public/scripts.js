const cards = document.querySelectorAll('.cards');


for(let card of cards){
    card.addEventListener('click', () => {
        const recipeId = card.getAttribute('id');
        window.location.href = `/recipes/${recipeId}`
    });
}

const show = document.querySelectorAll('.show_button')
const selector = document.querySelector('.information')

for (let bottom of show) {
    bottom.addEventListener("click", function(){
        selector.classList.add('hidden')
        location.reload(false)
    })
} 
