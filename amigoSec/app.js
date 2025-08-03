let amigos = [];

//Basicamente agregamos un amigo a la lista de amigos secretos
function agregarAmigo(){
    let a = document.getElementById('amigo').value;
    if (a ==``){
        darTXT(`#resultado`, `Ingreso un dato invalido, ingrese nuevamente`)    
    }
    else {
        amigos.unshift(a);
        limpiarTXT();
        mostrarAmigos();
    }
}

//Funcion creada para dar texto dinamicamente a cualquier elemento html
function darTXT(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function limpiarTXT(){
    document.getElementById('amigo').value = ``;
}
//Funcion para sortear amigo
function sortear(){
    let n = amigos.length;
    //En caso de que haya mas de 1 amigo se considera que podemos jugar al amigo imaginario
    if (n>1){
        let amigSec = Math.floor(Math.random()*n + 1);
        return darTXT(`#resultado`, `El amigo secreto es!! ${amigos[amigSec-1]}`);
    }
    else return alert("La lista tiene menos de 2 elementos!! ingrese mas elementos para poder sortear")
}

//Mostrar amigos por pantalla
function mostrarAmigos(){
    let list = document.getElementById(`listaAmigos`);
    list.innerHTML ="";
    for (let i=0; i<amigos.length;i++){
        const nuevoElemento = document.createElement(`li`);
        nuevoElemento.textContent= amigos[i];
        list.appendChild(nuevoElemento);
    }
}
