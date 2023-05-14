"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data3, classname = '') {
  console.log('lang in render',data3.languages);
  // const language = data3.languages ? data3.languages.name : "Unknown";
  const htmll = `
  <article class=  "${'country'} ${classname}" >
    <img class="country__img" src="${data3.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data3.name}</h3>
      <h4 class="country__region">${data3.region}</h4>
      <p class="country__row"><span>👫</span>${+(
        data3.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data3.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data3.currencies[0].name}</p>
    </div>
  </article>

  `;

  countriesContainer.insertAdjacentHTML("beforeend", htmll);

  countriesContainer.style.opacity = 1;
};

function countrySinfo(countryname) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v2/name/${countryname}`);
  const country = request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    const [neighbor] = data.borders;
  console.log("neighbor", neighbor, data.borders);
    if (!data.borders) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/name/${neighbor}`);
     request2.send();

      request2.addEventListener('load',function(){

        const [data2] = JSON.parse(this.responseText);
        
        console.log("Neibour detail", data2);
        //data2.languages= Object.values(data2.languages);
        renderCountry(data2,'neighbour');



      })
  });
}
countrySinfo("Pakistan");
