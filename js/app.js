console.log('Biglietto treno form')

const buttonElement = document.getElementById('submit')
console.log (buttonElement);

const kmInputElement = document.getElementById('km')
console.log (kmInputElement);

const ageInputElement = document.getElementById('age')
console.log (ageInputElement);

//Calcolare il prezzo totale
const prezzoTot = parseFloat(0.21 * kmInputElement.value) 

const resultElement = document.getElementById('result')
let discountUnder = 0.2
let discountOver = 0.4
let noDiscount = 0
const prezzoFinUn = (prezzoTot - prezzoTot * discountUnder);
const prezzoFinOv = (prezzoTot - prezzoTot * discountOver);
const prezzoFin = (prezzoTot - prezzoTot * noDiscount);


buttonElement.addEventListener('click', function() {
    console.log('click del pulsante')
    
    const km = parseFloat(kmInputElement.value)
    const age = parseInt(ageInputElement.value)
    const prezzoTot = parseFloat(0.21 * kmInputElement.value)
    let discountUnder = 0.2
    let discountOver = 0.4
    let noDiscount = 0
    const prezzoFinUn = (prezzoTot - prezzoTot * discountUnder);
    const prezzoFinOv = (prezzoTot - prezzoTot * discountOver);
    const prezzoFin = (prezzoTot - prezzoTot * noDiscount);
    

    //SE si ha meno di 18 anni si avrà uno sconto del 20%
if(age < 18){
    let discountUnder = 0.2
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
            <td>${prezzoTot + '&euro;'} </td>
            <td>20% di sconto</td>
            <td>${prezzoFinUn.toFixed(2) + '&euro;'} </td>
        </tr>
    </tbody>
   </table>
    `
    console.log(prezzoTot , prezzoFinUn.toFixed(2))
}

//ALTRIMENTI SE si ha più di 65 anni si avrà uno sconto del 40%
else if(age > 65){
    let discountOver = 0.4
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
            <td>${prezzoTot + '&euro;'} </td>
            <td>40% di sconto</td>
            <td>${prezzoFinOv.toFixed(2) + '&euro;'} </td>
        </tr>
    </tbody>
   </table>
    `
    console.log(prezzoTot , prezzoFinOv.toFixed(2))
 }
 //ALTRIMENTI il prezzo rimarrà quello totale
 else{
    let noDiscount = 0
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
            <td>${prezzoTot + '&euro;'} </td>
            <td>Nessuno sconto</td>
            <td>${prezzoFin + '&euro;'} </td>
        </tr>
    </tbody>
   </table>
    `
    console.log(prezzoTot , prezzoFin)
 }

})
//Calcolare il prezzo totale

