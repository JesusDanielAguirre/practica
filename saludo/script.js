console.log(`Se nota que todavia me extranas`);


setInterval(cambiarSaludo, 2000);
//let frase = document.getElementsByTagName("h2")[1].innerHTML;
function cambiarSaludo(){
    //console.log(`me parece una falta de respeto`);
    let frase = document.getElementsByTagName("h2")[1];
    //console.log(`frase ${frase}`);

    if(frase.innerHTML == "Ganando como siempre"){
    //if(document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre"){
        frase.innerHTML = "impongo moda para las ni;as";
        //document.getElementsByTagName("h2")[1].innerHTML= "impongo moda para las ni;as";
    }
    else{
        frase.innerHTML = "Ganando como siempre";
        //document.getElementsByTagName("h2")[1].innerHTML= "Ganando como siempre";
    }
    //console.log(`frase ${frase}`);
}


