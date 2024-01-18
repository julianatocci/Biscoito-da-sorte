const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

function vibrarImagem(element) {
    element.classList.add('vibrar');
    setTimeout(function() {
      element.classList.remove('vibrar');
    }, 2000); // 500 milissegundos, ajuste conforme necessário
}


// função callback
function abrirBiscoito(event) {
    event.preventDefault()
 
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    let mensagens = [
        "Não há que ser forte. Há que ser flexível.",
        "Surpreender e ser surpreendido é o segredo do amor.",
        "Você é do tamanho do seu sonho.",
        "Pare de procurar eternamente; a felicidade está bem ao seu lado."
    ];
    const randomIndex = Math.floor(Math.random() * mensagens.length);
    /*screen2.querySelector('#mensagem').innerText = mensagens[randomIndex]; 
    ;*/
    const mensagemElement = screen2.querySelector('#mensagem');
    mensagemElement.innerText = mensagens[randomIndex];
    mensagemElement.classList.add('slide-fwd-top');
}

  
function reiniciar(event) {
    event.preventDefault()
 
    screen2.classList.add('hide')
    screen1.classList.remove('hide')
}

const biscoitoFechado = document.querySelector('#imgBiscoitoFechado')
biscoitoFechado.addEventListener('click', abrirBiscoito)

const btnOutroBiscoito = document.querySelector('#btnOutroBiscoito')
btnOutroBiscoito.addEventListener('click', reiniciar)
