let btn= document.getElementById("btn");
let country=document.getElementById("country");
let result = document.getElementById("result");
btn.addEventListener("click",()=>{
    let countryName= country.value;
    const url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        
        result.innerHTML=`
            
            <img src="${data[0].flags.svg}" class="flag"/>
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>

                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Poulation:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
    
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common language:</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                </div>
            </div>

        `;
    }).catch(()=>{
        if(countryName.length==0){
            result.innerHTML=`<h3>The input field cannot be empty</h3>`;
        }else{
            result.innerHTML=`<h3>Please enter a valid country name</h3>`
        }
    })
});