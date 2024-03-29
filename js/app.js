console.log('Biglietto treno form')

const buttonElement = document.getElementById('submit')
console.log (buttonElement);

const kmInputElement = document.getElementById('km')
console.log (kmInputElement);

const ageInputElement = document.getElementById('age')
console.log (ageInputElement);

//Calcolare il prezzo totale
const prezzoTot = parseFloat(0.21 * km) 

const resultElement = document.getElementById('result')
let discount = 0.2
const prezzoFin = parseFloat(prezzoTot - prezzoTot * discount);


buttonElement.addEventListener('click', function() {
    console.log('click del pulsante')
    
    const km = parseFloat(kmInputElement.value)
    const age = parseInt(ageInputElement.value)
    let discount = 0.2
    const prezzoFin = parseFloat(prezzoTot - prezzoTot * discount);

    //SE si ha meno di 18 anni si avrà uno sconto del 20%
if(age < 18){
    let discount = 0.2
    resultElement.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Prezzo base</th>
            <th>Sconto</th>
            <th>Prezzo scontato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${prezzoTot} </td>
            <td>20% di sconto</td>
            <td>${prezzoFin} </td>
        </tr>
    </tbody>
   </table>
    `
}
//ALTRIMENTI SE si ha più di 65 anni si avrà uno sconto del 40%
else if(age > 65){
    discount = 0.4
    resultElement.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Prezzo base</th>
            <th>Sconto</th>
            <th>Prezzo scontato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${prezzoTot} </td>
            <td>40% di sconto</td>
            <td>${prezzoFin} </td>
        </tr>
    </tbody>
   </table>
    `
 }
 //ALTRIMENTI il prezzo rimarrà quello totale
 else{
    discount = 0
    resultElement.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Prezzo base</th>
            <th>Sconto</th>
            <th>Prezzo scontato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${prezzoTot} </td>
            <td>/</td>
            <td>${prezzoFin} </td>
        </tr>
    </tbody>
   </table>
    `
 }

})
//Calcolare il prezzo totale

