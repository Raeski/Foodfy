const cards = document.querySelectorAll('.cards');
const inputs = document.querySelectorAll('.form')

for(let card of cards){
    card.addEventListener('click', () => {
        const recipeId = card.getAttribute('id');
        window.location.href = `/recipes/${recipeId}`
    });
}
//for(let input of inputs) {
    input.addEventListener('click', () => {
        input.innerHTML = "Olá"
    });
}

const testes = document.querySelectorAll('.information')
const showIng = document.querySelectorAll('.collapsible')

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
