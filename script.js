"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const close_subscription_button = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const modal_show = document.querySelector(".btnn");
const bodd = document.querySelector("body");
const window_to_blur = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const startdateInput = document.getElementById("startdate");
const servicenameInput =  document.getElementById('service');
const cardnumb = document.getElementById('input-cc');
const enddateInput = document.getElementById("enddate");
const submitButton = document.getElementById("butt");




class SubscriptionInfo  {
  
  constructor(start,next,Cardnum,type,name){

    this.start = start;
    this.next = next;
    this.type = type;
    this.Cardnum =  Cardnum;
    this.name = name;


  }
  
};
submitButton.addEventListener("click", function() {

  const newsubscription = new SubscriptionInfo( startdateInput.value,enddateInput.value,cardnumb.value,cardType,servicenameInput.value);
 
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

    })
  );
};



const CloseSubscription = function () {
  modal.classList.add("hidden");
  window_to_blur.classList.remove("blur");
  overlay.classList.add("hidden");
  overlay.classList.remove("blur");
};
const AddSubscription = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  window_to_blur.classList.add("blur");
  
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    CloseSubscription();
  }
});

modal_show.addEventListener("click", AddSubscription);
close_subscription_button.addEventListener("click", CloseSubscription);
overlay.addEventListener("click", CloseSubscription);
submitButton.addEventListener('click',CloseSubscription);


var cardType; // Declare the cardType variable before using it

var cleave = new Cleave("#input-cc", {
  creditCard: true,
  delimiter: "-",
  onCreditCardTypeChanged: function (type) {
    cardType = type;
  },
});

const TakeSubscriptionInfo = function(){
  
  // SubscriptionInfo.start= document.querySelector('startdate').value;


}
