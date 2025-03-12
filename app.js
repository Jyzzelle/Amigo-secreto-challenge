// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    //console.log(amigos);
    if(nombreAmigo === ""){
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    //Validación para que no se repita un nombre al ingresarlo al campo de texto
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}" ya está en la lista`);
    }        
    else {
         //Aquí agrego al amigo a la lista de amigos.
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
    }
    //amigos.push(nombreAmigo);
    //console.log(listaAmigos);
    //inputAmigo.value = ""
    //inputAmigo.focus();
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        listaAmigos.appendChild(elemento);
    }
}

function sortearAmigo(){
    if(amigos.length <= 2){
        alert("No hay suficientes amigos para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

    //Limpiar lista de amigos para poder iniciar otro sorteo
    amigos = [];
    actualizarListaAmigos();
}