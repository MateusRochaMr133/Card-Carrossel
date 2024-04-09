let index = 1;
showSlides(1);


function addSlides(n) {
    showSlides(index += n)
}

/* Carrega o card atual que o usuario quer exibir */
function currentSlide(n) {
    showSlides(index = n)
}

function showSlides(n) {
    /* Seleciona os cards */
    let slides = document.getElementsByClassName("slides");

    /* Seleciona os pontos que irão alterar o card atual na tela */
    let dots = document.getElementsByClassName("dot");

    /* Se o numero do slide que o usuario tentar exibir for maior que a quantidade de cards disponiveis ele ira automaticamente voltar para o primeiro slide ou seja , quando o usuario estiver no ultimo slide ele automaticamente volta para o primeiro  */
    if ( n > slides.length) {
        index = 1;
    }

    /* Se o numero do slide for menor que 0 ele ira automaticamente para o ultimo card do slide */
    if ( n < 1) {
        index = slides.length
    }

    for (let i = 0; i < slides.length; i++ ) {
        slides[i].style.display = 'none';
        /* Replace - ("Active", "") - Substitui uma string por qualquer outra que for denifida, será obrigatorio informar outra que for definida , sera obrigatorio informar primeiramente a string que sera substituida e depois a string que ira substituir a primeira */
        dots[i].className = dots[1].className.replace(" active", "");
    }

    slides[index - 1].style.display = "flex";
    dots[index - 1].className += " active";
}