const cards = document.querySelectorAll('.cards');

for(let card of cards){
    card.addEventListener('click', () => {
        const recipeId = card.getAttribute('id');
        window.location.href = `/recipes/${recipeId}`
        console.log(recipeId)
    });
}
