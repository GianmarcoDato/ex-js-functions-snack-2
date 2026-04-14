
// SNACK 1
// function somma(num1, num2){
//     return(num1 + num2)
// }
// const sommaNumeri = somma(10,10)
// console.log(sommaNumeri)

const somma = (num1, num2)=>num1 + num2
const sommaNumeri = somma(10, 10)
console.log(sommaNumeri)


//SNACK 2 
const quadrato = numero =>  numero * numero
console.log(quadrato(100))


//SNACK 3 
const sommaNum = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const eseguiOperazione = (a, b, operazione) => console.log(`il risultato è... ${operazione(a, b)}`);

eseguiOperazione(3, 4, sommaNum);
eseguiOperazione(3, 4, moltiplica)


//SNACK 4
function creaTimer(time){
return ()=>{
    setTimeout(()=>{
console.log("tempo scaduto!")
    },time)
}
    
}
const timer = creaTimer(5000)
timer()




// SNACK 5
function stampaOgniSecondo(messaggio){
   let timer = setInterval(()=>{
        console.log(messaggio)
    },1000)
    setTimeout(()=>{
        clearInterval(timer);
        console.log("timer bloccato!")
    },3000)
    
}
stampaOgniSecondo("ciao!")


//SNACK 6

function creaContatoreAutomatico(intervallo){
    let contatore = 0
    return()=>{
        setInterval(()=>{
            contatore ++;
            console.log(`il contatore è arrivato a ${contatore}`)
        }, intervallo)

        }
    }

const contatoreAutomatico = creaContatoreAutomatico(1000)
// contatoreAutomatico()

// SNACK 7

function eseguiEferma(messaggio, intervallo, stop){
    const intervalId = setInterval(()=>{
        console.log(messaggio)
    },intervallo)
    setTimeout(()=>{
        clearInterval(intervalId);
        console.log("messaggio bloccato")
    },stop)

}

eseguiEferma("Hello HOF function!", 1000, 5000)
