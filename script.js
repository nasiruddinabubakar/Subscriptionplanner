"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data3, classname = 'neighbour') {
  console.log('lang in render', data3.languages);
  // const language = data3.languages ? data3.languages.name : "Unknown";
  const htmll = `
  <article class=  "${'country'} ${classname}" >
    <img class="country__img" src=${'https://logo.clearbit.com/netflix.com'} />
    <div class="country__data">
      <h3 class="country__name">Netflix</h3>
      <h4 class="country__region">${data3.region}</h4>
      <p class="country__row"><span>💳</span>${'VISA'}</p>
      <p class="country__row"><span>🤝</span>${'3/2/18'}</p>
      <p class="country__row"><span>💵</span>${'3/8/23'}</p>
    </div>
  </article>


  `;


  countriesContainer.insertAdjacentHTML("beforeend", htmll);


  countriesContainer.style.opacity = 1;
       const popup = document.querySelector('.country');
   
  document.querySelector(".country").addEventListener('mouseover', function () {
    popup.classList.remove('neighbour');


    console.log("hovering");
    // console.log(data3.classlist);
  })
  document.querySelector(".country__data").addEventListener('mouseout', function () {
    popup.classList.add('neighbour');


  })
 


};


function countrySinfo(countryname) {
  

  fetch(`https://restcountries.com/v2/name/${countryname}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);

      const neighbor = data[0].borders[0];
      console.log(neighbor);

      return fetch(`https://restcountries.com/v2/name/${neighbor}`);
    })
    .then((response2) => response2.json());
}



  countrySinfo("Pakistan");

    


//countrySinfo("usa");
//countrySinfo("Russia");
// const request = new XMLHttpRequest();

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

  //       const [data2] = JSON.parse(this.responseText);
  //       console.log(data2);
  //       renderCountry(data2,"neighbour");

  //     })
  // });