const cards = document.querySelectorAll('.cards');


for(let card of cards){
    card.addEventListener('click', () => {
        const recipeId = card.getAttribute('id');
        window.location.href = `/recipes/${recipeId}`
    });
}
const testes = document.querySelectorAll('.information')
const showIng = document.querySelectorAll('.collapsible')


for(let test of testes )
    test.addEventListener('click', function (){
        if(showIng.innerHTML == 'ESCONDER') {
            test.classList.add('active');
            showIng.innerHTML = 'Mostrar';
        } else {
            test.classList.remove('active');
            showIng.innerHTML = 'ESCONDER';
    }
});