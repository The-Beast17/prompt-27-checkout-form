const country = document.querySelector("#country");
const state = document.querySelector("#state");
const city = document.querySelector("#city");
const submit = document.querySelector("button");
const payment = document.getElementsByName("pay");

submit.addEventListener("click" , (event) =>{
   event.preventDefault();
   console.log("clicked");
   console.log(country.value);
   console.log(state.value);
   console.log(city.value);

   /**********radio button **** */
   for (const option of payment){
    if(option.checked){
        console.log(option.value);
        break;
    }
}

});


