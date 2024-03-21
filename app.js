// ALERTAS
alert ('Boas vindas ao Jogo do Número Secreto')

let pergunta = confirm ('Você é novo por aqui?');
let nomePessoa = prompt ('Qual é o seu nome?')
if (pergunta) {
    alert (`Que bom que está aqui ${nomePessoa}`)
}  else {
alert (`Que bom que voltou, ${nomePessoa}!`)
}
// 
// FUNCIONAMENTO 
function gerarNumeroAleatorio() {
      return parseInt(Math.random() * 1 * 10)
}

let numeroAlatorio = gerarNumeroAleatorio()

function verificarChute() {
   let chute = document.querySelector('input').value
   if (chute == numeroAlatorio) {
      document.getElementsByTagName('h1')[0].innerHTML = 'Acertou !'
      document.getElementsByTagName('label')[0].innerHTML = 'Parabéns, Você descobriu o número secreto'
      let minhaImagemAcerto = document.querySelector ('img')
      minhaImagemAcerto.src = 'chute_acerto.png'
   } else {
      document.getElementsByTagName('h1')[0].innerHTML = 'Errou !'
      document.getElementsByTagName('label')[0].innerHTML = chute > numeroAlatorio ? 'O número secreto é menor' : 'O número secreto é maior'
      let minhaImagemErro = document.querySelector ('img')
      minhaImagemErro.src = 'chute_erro.png'
   }
}

function reiniciar() {
   numeroAlatorio = gerarNumeroAleatorio()
   let novoJogo = document.querySelector('input').value = ''
   console.log(novoJogo)
   document.getElementsByTagName('h1')[0].innerHTML = 'Jogo do Número Secreto'
   document.getElementsByTagName('label')[0].innerHTML = 'Escolha um número entre 1 e 10.'
   let minhaImagemComum = document.querySelector ('img')
   minhaImagemComum.src = 'img robo.png'
}