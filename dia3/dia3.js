
const area = prompt("Você quer seguir para a área de 'Front-End' ou 'Beck-End'? Digite o nome da área: ")
let linguagem = ""
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?")
}
else if  (area === "Beck-End"){
    linguagem = prompt("Você quer aprender C# ou Java?")
}
else {
    alert("Você não inseriu uma informação válida!")
}

const especialidadeouFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para se desenvolvendo para se tornar Fullstack")
if (especialidadeouFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}`)
}
else if  (especialidadeouFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tormar Fullstack`)
}
else {
    alert("Você não inseriu uma informação válida!")
}

let mensagem = prompt("Tem mais alguma tecnilogia que você gostaria de aprender? Digite 'sim' se a resposta for sim.")
while (mensagem === "sim"){
    let novaTecnologia = prompt("Qual?")
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' caso a resposta for sim.")
}

