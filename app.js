//Array para armazenar nomes 
let amigos = []

//Função para inserir os nomes de amigos no campo de texto
function adicionarAmigo() {
    const campoDeTexto = document.getElementById('amigo');
    const input = campoDeTexto.value.trim();
    if (input == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(input);
    }

    listaDeAmigos();

    campoDeTexto.value = '';
}

//Função para listar amigos 
function listaDeAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    amigos.forEach(name => {
        const li = document.createElement('li')
        li.textContent = name
        ul.appendChild(li)
    }) 
}

//Função para sortear amigos 
function sortearAmigo() {
    if (amigos == [] || amigos.length == 0) {
        alert('Adicione um nome antes de sortear'); 
    }

    const index = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[index]; 

    const ul = document.getElementById('resultado');
    ul.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto sorteado é: ${amigoSecreto}`
    ul.appendChild(li)
}