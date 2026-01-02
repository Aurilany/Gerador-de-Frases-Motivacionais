

// FRASES:

const frases= [

"Você é mais capaz do que imagina.",
"Um passo de cada vez ainda é progresso.",
"Não limite os seus desafios. Desafie os seus limites.",
"Não desista. O começo é sempre o mais difícil.",
"Você está no caminho certo.",
"Hoje é um ótimo dia para aprender algo novo.",
"Viver é continuar aprendendo!",
"Deixe as desculpas para trás, e coloque suas metas à frente.",
"Você se torna grande, quando começa a pensar grande."

];

//ELEMENTOS DO HTML:

const frase= document.getElementById("frase");
const botao= document.getElementById("botao");

// AÇÃO AO CLICAR NO BOTÃO:

botao.addEventListener("click", function () {
const numeroAleatorio= Math.floor(Math.random() *frases.length);
frase.textContent = frases[numeroAleatorio];

});

