//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
     //verificar se foi inserido o dado
    if (amigo) {
        if (amigos.includes(amigo)) {
            alert("Existem nomes iguais. Por favor, tente inserir o sobrenome junto ou apelido.");
        } else {
            //caso o nome já tenha sido inserido
            amigos.push(amigo);
            document.getElementById("amigo").value = "";
            //caso não fosse ele vai limpar o campo
            listaNova();
        }
    } else {
        alert("Por favor, digite um nome no campo.");
    }
}//onde ocorre a coleta dos nomes 

function listaNova() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    amigos.forEach(function(amigo) {
        let elemento = document.createElement("p");
        elemento.textContent = amigo;
        listaAmigos.appendChild(elemento);
    });  //aqui lista de amigos vai receber a var "elemento" ("/p") 
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, insira pelo menos um amigo antes do sorteio.");
        return;
    }
    let sorteio = Math.floor(Math.random() * amigos.length);
    let amigoSec = amigos[sorteio];
    //amigoSecreto recebe a numeração referente ao nome e seu valor numérico transformado em inteiro
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let elemento = document.createElement("p");
    // usa <p> para exibir o resultado
    elemento.textContent = "O seu amigo secreto é o/a: " + amigoSec;
    resultado.appendChild(elemento);

    // limpar a lista de amigos após o sorteio
    amigos = [];
    listaNova(); 
}
