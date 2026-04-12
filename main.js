
// SNACK 1
// function somma(num1, num2){
//     return(num1 + num2)
// }
// const sommaNumeri = somma(10,10)
// console.log(sommaNumeri)

const somma = (num1, num2)=>{
    return (num1 + num2)
}

const sommaNumeri = somma(10, 10)
console.log(sommaNumeri)


//SNACK 2 
const quadrato = (numero) => ( numero * numero)
console.log(quadrato(100))


//SNACK 3 
const sommaNum = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const eseguiOperazione = (a, b, operazione) => console.log(`il risultato è... ${operazione(a, b)}`);

eseguiOperazione(3, 4, sommaNum);
eseguiOperazione(3, 4, moltiplica)


//SNACK 4
function creaTimer(){

    setTimeout(()=>{
console.log("tempo scaduto!")
    },1000)
}
creaTimer()


// SNACK 5
function stampaOgniSecondo(){
   let timer = setInterval(()=>{
        console.log("ciao")
    },1000)
    setTimeout(()=>{
        clearInterval(timer);
        console.log("timer bloccato!")
    },3000)
    
}
stampaOgniSecondo()


//SNACK 6

