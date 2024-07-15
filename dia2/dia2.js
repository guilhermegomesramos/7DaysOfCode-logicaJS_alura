
const Nome = prompt ('Qual o seu nome?');
const Idade = prompt ('Quantos anos você tem?');
const LinguagemDeProgramacao = prompt ('Qual linguagem de progamação você está estudando?');
const Mensagem = `Olá ${Nome} você tem ${Idade}
anos e já está aprendendo ${LinguagemDeProgramacao} !`;

alert (Mensagem);

const gosta = prompt (`Você gosta de estudar ${LinguagemDeProgramacao} ? Respode com o número 1 - SIM ou 2 - NÃO`);
if (gosta == 1) {
    alert('Muito');
} 
if (gosta == 2) {
    alert('Ahh');
}


