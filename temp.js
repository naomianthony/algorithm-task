const fahrenheitInput = document.querySelector('#fahrenheit > input');
const celsiusInput = document.querySelector('#celsius > input');

function convertFahrToCelsius(){
    const fTemp = fahrenheitInput.value;
   if ( !isNaN(fTemp )){
       console.log("this is " + fTemp )
    const cTemp = (fTemp - 32) * (5/9);
    celsiusInput.value = Number(cTemp).toFixed(4);
   } 
    else{
        console.log(typeof(fTemp));
       alert(fTemp   + " is not a valid number  but a / an " + typeof(fTemp));
   } 
}

fahrenheitInput.addEventListener('input', convertFahrToCelsius);



