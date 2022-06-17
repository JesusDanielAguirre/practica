console.log(`Se nota que todavia me extranas`);


setInterval(cambiarSaludo, 2000);

/***
 * Cambia la frase en el titulo h2
 */

function cambiarSaludo(){
    let frase = document.getElementsByTagName("h2")[1];
    if(frase.innerHTML == "Ganando como siempre"){
        frase.innerHTML = "Impongo moda para las ni;as!";
    }
    else{
        frase.innerHTML = "Ganando como siempre";
    }
    //console.log(`frase ${frase}`);
}


