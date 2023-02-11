const palavras = [
    "abacate", "bola", "cachorro", "dado", "elefante","faca", "guitarra", "helicóptero", "internet", "jardim", "kangaroo", "leão", "macaco", "navio", "óculos", "piano", "quarto", "relógio", "sino", "tigre", "uva", "voo", "xícara", "zebra", "água", "banana", "casa", "dinheiro", "elefante", "fada", "girafa", "helicóptero", "igreja", "janela", "lebre", "maçã", "ninho", "óleo", "pera", "quadro", "rato", "sapato", "Naruto", "torre", "urso", "vaca", "xadrez", "árvore", "bebê", "cavalo", "dragão", "estrela", "foguete", "gelo", "hidrante", "ijuí", "jabuti", "lapis", "mesa", "navio", "ouro", "pássaro", "quebra-cabeça", "rã", "sol", "tambor", "unicórnio", "vírus", "xarope", "água-viva", "banheiro", "cachorro-quente", "dado", "elefante", "flor", "galinha", "hortelã", "igreja", "jardim", "laranja", "melancia", "novembro", "orquídea", "pato", "queijo", "rato", "sorvete", "teclado", "ursinho", "vassoura", "xícara", "yogurte", "zebra"
  ];  

const randomNumber = () => {
    let number = Math.random()*palavras.length
    return Math.round(number)
}

const buscarPalavra = ()=> {
    let posicao = randomNumber()
    let palavra = palavras[posicao]
    return palavra
}


const buscaLetraNaPalavra = (letra) => {
    let palavra = buscarPalavra()
    return palavra.includes(letra)
    
}
const retornaTeclaPrecionada = () => {
    document.addEventListener("keypress", function(event) {
        console.log(event.key)
    })
}

// const retornaTeclaPrecionada = (evento) => {
//     const tecla = evento.key;
//     return tecla
// }


buscaLetraNaPalavra('b')
console.log(buscaLetraNaPalavra('b'))

retornaTeclaPrecionada()

