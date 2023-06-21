"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (classname = "neighbour", brand_api) {
  classname = "neighbour";
    const logo = 'https://logo.clearbit.com/'+brand_api;
    const name = brand_api.slice(0,-4);
   
   
  
  renderCountry(newsubscription);

  // Perform further operations with the start date value
});

const renderCountry = function (output) {
  const classname = "neighbour";
  const brand_api = output.name;
  const logo = "https://logo.clearbit.com/" + brand_api;
  const name = brand_api.slice(0, -4);
  const htmll = `
  <article class=  "${"country"} ${classname}" >
    <img class="country__img" src=${logo} />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region"></h4>
      <p class="country__row"><span>💳</span>${"VISA"}</p>
      <p class="country__row"><span>🤝</span>${"3/2/18"}</p>
      <p class="country__row"><span>💵</span>${"3/8/23"}</p>
      <h4 class="country__region"></h4>
      <p class="country__row"><span>💳</span>${output.type}</p>
      <p class="country__row"><span>🤝</span>${output.start}</p>
      <p class="country__row"><span>💵</span>${output.next}</p>
    </div>
  </article>


  `;

  countriesContainer.insertAdjacentHTML("beforeend", htmll);

  countriesContainer.style.opacity = 1;
  const popup = document.querySelector(".country");
  const rendered_divs = document.querySelectorAll(".country");
  // console.log(rendered_divs);
  rendered_divs.forEach((divs) =>
    divs.addEventListener("mouseover", function () {
      divs.classList.remove("neighbour");

      // console.log("hovering");
      // console.log(data3.classlist);
    })
  );
  rendered_divs.forEach((divs) =>
    divs.addEventListener("mouseout", function (e) {
      divs.classList.add("neighbour");

      console.log("hovering " + e);
      // console.log(data3.classlist);
    })
  );
};

function countrySinfo(countryname, logo) {
  renderCountry(0, logo);
}

var cardType; // Declare the cardType variable before using it

var cleave = new Cleave("#input-cc", {
  creditCard: true,
  delimiter: "-",
  onCreditCardTypeChanged: function (type) {
    cardType = type;
  },
});
console.log("papa");
const subscription = document.querySelector(".modal");
console.log(document.querySelector(".modal"));
const subscription_button = document.querySelector(".btnn");
const AddSubscription = function () {
  subscription.classList.remove("hidden");
};

// request.open("GET", `https://restcountries.com/v2/name/${countryname}`);
// const country = request.send();

// request.addEventListener("load", function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   renderCountry(data);

//   const [neighbor] = data.borders;
// console.log(neighbor);
//   if (!data.borders) return;

//   const request2 = new XMLHttpRequest();
//   request2.open("GET", `https://restcountries.com/v2/name/${neighbor}`);
//    request2.send();

//     request2.addEventListener('load',function(){


