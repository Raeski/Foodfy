const cards = document.querySelectorAll('.cards');


for(let card of cards){
    card.addEventListener('click', () => {
        const recipeId = card.getAttribute('id');
        window.location.href = `/recipes/${recipeId}`
    });
}
const testes = document.querySelectorAll('.information')
const showIng = document.querySelectorAll('.collapsible')


/*for(let test of testes )
    test.addEventListener('click', function (){
        if(showIng.innerHTML == 'ESCONDER') {
            test.classList.add('active');
            showIng.innerHTML == 'Mostrar';
        } else {
            test.classList.remove('active');
            showIng.innerHTML = 'ESCONDER';
    }
});
*/
for (let i =0; i < showIng.length; i++) {
    showIng[i].addEventListener('click', () => {
        if(testes[i]. classList.contains('active')) {
            testes[i].classList.remove('active')
            showIng[i].textContent = "ESCONDER"
        } else {
            testes[i].classList.add('active')
            showIng[i].textContent = "MOSTRAR"
        }
    })
}