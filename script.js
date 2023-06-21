"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const close_subscription_button = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const delete_modal = document.getElementById("delete");
const delete_btn = document.querySelector("#del");
const delet_open = document.querySelector("#delete_modal");
const overlayy = document.querySelector("#overlayy");
const modal_show = document.querySelector(".btnn");
const bodd = document.querySelector("body");
const window_to_blur = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const startdateInput = document.getElementById("startdate");
const servicenameInput = document.getElementById("service");
const delete_subscription_name = document.querySelector("#delete--name");
const cardnumb = document.getElementById("input-cc");
const enddateInput = document.getElementById("enddate");
const submitButton = document.getElementById("butt");
const close_delete_button = document.querySelector("#delete--cross");
const notification_Model_Button = document.querySelector(".notification");
const notification_Modal = document.querySelector("#notif");
const notification_cross = document.querySelector("#notif--cross");
const notif_overlay = document.querySelector("#notif--overlay");
const notifications = document.querySelector("#notification--bar");
let database = [];
class SubscriptionInfo {
  constructor(start, next, Cardnum, type, name) {
    this.start = start;
    this.next = next;
    this.type = type;
    this.Cardnum = Cardnum;
    this.name = name;
  }
}
const FetchingData = function () {
  if (!localStorage.getItem("user")) {
  } else {
    database = JSON.parse(localStorage.getItem("user"));

    database.forEach((country) => {
      renderCountry(country);
    });
  }
};

const CheckForDates = function () {
  const oneDay = 24 * 60 * 60 * 1000;
  let difference;
  let obj_date;
  const today_date = new Date();
  database.forEach((obj) => {
    obj_date = new Date(`${obj.next}`);
    const diffMilliseconds = Math.abs(today_date - obj_date);

    // Calculate the number of days
    const diffDays = Math.floor(diffMilliseconds / oneDay);

    if (diffDays <= 5) {
      notifications.insertAdjacentHTML(
        "beforeend",
        `<span> New Payment for ${obj.name} in ${diffDays} days! <span><br>`
      );
    }
  });
};
submitButton.addEventListener("click", function () {
  const newsubscription = new SubscriptionInfo(
    startdateInput.value,
    enddateInput.value,
    cardnumb.value,
    cardType,
    servicenameInput.value
  );

  database.push(newsubscription);
  localStorage.setItem("user", `${JSON.stringify(database)}`);
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
      <p class="country__row"><span>🔃</span>${output.next}</p>
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
    })
  );
  rendered_divs.forEach((divs) =>
    divs.addEventListener("mouseout", function (e) {
      divs.classList.add("neighbour");
    })
  );
};

function CloseSubscription(MODAL_TO_CLOSE) {
  MODAL_TO_CLOSE.classList.add("hidden");
  window_to_blur.classList.remove("blur");
  overlay.classList.add("hidden");
  overlay.classList.remove("blur");
}
function AddSubscription(MODAL_TO_OPEN) {
  overlay.classList.remove("hidden");

  MODAL_TO_OPEN.classList.remove("hidden");
  window_to_blur.classList.add("blur");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    CloseSubscription(modal);
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !delete_modal.classList.contains("hidden")) {
    CloseSubscription(delete_modal);
  }
});
notification_Model_Button.addEventListener("click", () => {
  AddSubscription(notification_Modal);
});
notification_Model_Button.addEventListener("mouseout", function (e) {
  // CloseSubscription(notification_Modal);
});
modal_show.addEventListener("click", () => {
  AddSubscription(modal);
});
close_subscription_button.addEventListener("click", () => {
  CloseSubscription(modal);
});
overlay.addEventListener("click", () => {
  CloseSubscription(modal);
});
submitButton.addEventListener("click", () => {
  CloseSubscription(modal);
});

delet_open.addEventListener("click", () => {
  AddSubscription(delete_modal);
});
delete_btn.addEventListener("click", function () {
  const objectIdNameDelete = delete_subscription_name.value;

  const index = database.findIndex((obj) => obj.name === objectIdNameDelete);

  if (index !== -1) {
    database.splice(index, 1);
    localStorage.setItem("user", `${JSON.stringify(database)}`);
    location.reload();
  }

  CloseSubscription(delete_modal);
});
overlayy.addEventListener("click", () => {
  delete_modal.classList.add("hidden");
  window_to_blur.classList.remove("blur");
  overlayy.classList.add("hidden");
  overlayy.classList.remove("blur");
});
overlayy.addEventListener("click", () => {
  notification_Modal.classList.add("hidden");
  window_to_blur.classList.remove("blur");
  overlayy.classList.add("hidden");
  overlayy.classList.remove("blur");
  CloseSubscription(notification_Modal);
});
close_delete_button.addEventListener("click", () => {
  delete_modal.classList.add("hidden");
  window_to_blur.classList.remove("blur");
  overlayy.classList.add("hidden");
  overlayy.classList.remove("blur");
});
notification_cross.addEventListener("click", () => {
  notification_Modal.classList.add("hidden");
  window_to_blur.classList.remove("blur");
  notif_overlay.classList.add("hidden");
  notif_overlay.classList.remove("blur");
  CloseSubscription(modal);
});

var cardType; // Declare the cardType variable before using it

var cleave = new Cleave("#input-cc", {
  creditCard: true,
  delimiter: "-",
  onCreditCardTypeChanged: function (type) {
    cardType = type;
  },
});
FetchingData();
CheckForDates();

// localStorage.clear();
// console.log(database);
