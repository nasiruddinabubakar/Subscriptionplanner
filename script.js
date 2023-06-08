"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function ( classname = "neighbour",brand_api) {
  classname = "neighbour";
    const logo = 'https://logo.clearbit.com/'+brand_api;
    const name = brand_api.slice(0,-4);
   
   
  
  const htmll = `
  <article class=  "${"country"} ${classname}" >
    <img class="country__img" src=${logo} />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region"></h4>
      <p class="country__row"><span>💳</span>${"VISA"}</p>
      <p class="country__row"><span>🤝</span>${"3/2/18"}</p>
      <p class="country__row"><span>💵</span>${"3/8/23"}</p>
    </div>
  </article>


  `;

  countriesContainer.insertAdjacentHTML("beforeend", htmll);

  countriesContainer.style.opacity = 1;
  const popup = document.querySelector(".country");
  const rendered_divs = document.querySelectorAll('.country');
  // console.log(rendered_divs);
  rendered_divs.forEach((divs)=>
  
  divs.addEventListener("mouseover", function () {
    divs.classList.remove("neighbour");

    // console.log("hovering");
    // console.log(data3.classlist);
  }));
  rendered_divs.forEach((divs)=>
  
  divs.addEventListener("mouseout", function (e) {
    divs.classList.add("neighbour");

    console.log("hovering "+e);
    // console.log(data3.classlist);
  }));
};

function countrySinfo(countryname,logo) {
 
      renderCountry(0,logo);
    
}

countrySinfo("Pakistan","Netflix.com");
countrySinfo("Pakistan","PrimeVideo.com");
countrySinfo('us',"HBO.com");
countrySinfo('us',"Marvel.com");
countrySinfo('us',"icc.com");

var cardType; // Declare the cardType variable before using it

var cleave = new Cleave('#input-cc', {
  creditCard: true,
  delimiter: '-',
  onCreditCardTypeChanged: function(type) {
    cardType = type;
   
  }
});



