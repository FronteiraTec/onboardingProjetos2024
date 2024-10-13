const imagensContainer = document.querySelector('.imagens-container');
const imagens = document.querySelectorAll('.imagens img');
const bolinhas = document.querySelectorAll('.imagens-nav a');
const proximo = document.getElementById('proximo');
const anterior = document.getElementById('anterior');

var index = 1;
mudarIndex(1);

function mudarIndex(i){
    index = i;
    
    const img = document.getElementById(`imagem${index}`);

    // equivalente ao href="#imagem12345" no HTML
    img.scrollIntoView(true, { behavior: 'smooth'});
    

    //mudar a opacidade das bolinhas
    bolinhas.forEach((bolinhas, j) => {
        if (j === index - 1) {
            bolinhas.style.opacity = 1;
        } else {
            bolinhas.style.opacity = 0.5;
        }
    })
}


//funções dos botoes proximo e anterior.
proximo.addEventListener('click', () => {
    index = (index % imagens.length) + 1; // Volta ao primeiro após o último
    mudarIndex(index);
});

anterior.addEventListener('click', () => {
    index = (index - 2 + imagens.length) % imagens.length + 1;
    mudarIndex(index);
});
