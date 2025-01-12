

const btnStart = document.querySelector("button");
const containerPlayer = document.querySelector(".containerPlayer");

const ulScelte = document.querySelector(".sceltaPlayer");
const arrScelte = document.querySelectorAll(".sceltaPlayer li");

const imgPlayer = document.querySelector(".containerPlayer > img");
const imgCpu = document.querySelector(".containerCpu > img");

const risultato = document.querySelector(".risultato");
const risultatoSpan = document.querySelector(".risultato span")

let scorePlayer = document.getElementById("scPlayer");
let scoreCpu = document.getElementById("scCpu");

scorePlayer.textContent = 0;
scoreCpu.textContent = 0;

// ordine indice corrisponde a ordine <li> segni 
const listaSegni = ["foglia", "forbice", "sasso"];


/* Evento Scelta */
btnStart.addEventListener("click", function(){

    btnStart.style.visibility="hidden";

    ulScelte.style.display = "grid";
    risultato.style.display = "none";
    containerPlayer.classList.add("gap");

    //Scomparsa Img Cpu
    imgCpu.removeAttribute("src");
    imgCpu.removeAttribute("alt");

    //Scomparsa Img Player
    imgPlayer.removeAttribute("src");
    imgPlayer.removeAttribute("alt");

    // Rimozione stile pulsante
    risultatoSpan.classList.remove("patta");
    risultatoSpan.classList.remove("vinta");
    risultatoSpan.classList.remove("persa");

})



for( let i = 0; i < arrScelte.length; i++){

    arrScelte[i].addEventListener("click",function(){
    
        btnStart.style.visibility="visible";
        ulScelte.style.display = "none";
        containerPlayer.classList.remove("gap");

        // Player 
        imgPlayer.setAttribute("src",`immagini/${listaSegni[i]}.png`);
        imgPlayer.setAttribute("alt",listaSegni[i]);
        
        // Cpu
        const nRandom = Math.floor(Math.random() * 3 );
        imgCpu.setAttribute("src",`immagini/${listaSegni[nRandom]}.png`);
        imgCpu.setAttribute("alt",listaSegni[nRandom]);

        // Esito scelte 
        switch( nRandom ){

            case 0:                            
                if     ( i == 0){ esito("patta"); } // cpu: foglia  player: foglia
                else if( i == 1){ esito("vinta"); } // cpu: foglia  player: forbice
                else if( i == 2){ esito("persa"); } // cpu: foglia  player: sasso
                break;

            case 1: 
                if     ( i == 0){ esito("persa"); } // cpu: forbice  player: foglia
                else if( i == 1){ esito("patta"); } // cpu: forbice  player: forbice
                else if( i == 2){ esito("vinta"); } // cpu: forbice  player: sasso
                break;

            case 2: 
                if     ( i == 0){ esito("vinta"); } // cpu: sasso  player: foglia
                else if( i == 1){ esito("persa"); } // cpu: sasso  player: forbice
                else if( i == 2){ esito("patta"); } // cpu: sasso  player: sasso
                break;
        }

    })

}


// Esito partita
function esito( esito ){

    risultato.style.display = "block";
    risultatoSpan.textContent = `Partita ${esito}`;
    risultatoSpan.classList.add(esito);

    // Aggiunta punteggio a vincitore ( eccetto patta )
    if( esito == "vinta"){ ++scorePlayer.textContent; }
    else if( esito == "persa"){ ++scoreCpu.textContent;}

}