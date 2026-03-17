
// Elements
const countrySelected = document.getElementById("selected-country");
const countryList = document.querySelector(".custom-dropdown #selected-country").parentElement.querySelector(".country-list");
const flagImg = document.getElementById("selected-flag");

const currencySelected = document.getElementById("selected-currency");
const currencyList = document.querySelector("#currency-dropdown .currency-list");

// Toggle Country Dropdown
countrySelected.addEventListener("click", (e) => {
  e.stopPropagation();
  const isVisible = countryList.style.display === "block";
  closeAllDropdowns();
  if (!isVisible) {
    countryList.style.display = "block";
  }
});

// Toggle Currency Dropdown
currencySelected.addEventListener("click", (e) => {
  e.stopPropagation();
  const isVisible = currencyList.style.display === "block";
  closeAllDropdowns();
  if (!isVisible) {
    currencyList.style.display = "block";
  }
});

// Selection Logic for Country
function selectCountry(name, flag) {
  flagImg.src = "assets/Layout1/Image/flags/" + flag;
  countrySelected.querySelector("span").innerHTML = name;
  countryList.style.display = "none";
}

// Selection Logic for Currency
function selectCurrency(name) {
  currencySelected.querySelector("span").innerHTML = name;
  currencyList.style.display = "none";
}

// Close all dropdowns
function closeAllDropdowns() {
  if (countryList) countryList.style.display = "none";
  if (currencyList) currencyList.style.display = "none";
}

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-dropdown")) {
    closeAllDropdowns();
  }
});

// Countdown Logic
function startCountdown() {
  const daysEl = document.querySelectorAll(".timer-box .num")[0];
  const hoursEl = document.querySelectorAll(".timer-box .num")[1];
  const minsEl = document.querySelectorAll(".timer-box .num")[2];
  const secsEl = document.querySelectorAll(".timer-box .num")[3];

  let targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 4); // 4 days from now

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minsEl.textContent = mins.toString().padStart(2, '0');
    secsEl.textContent = secs.toString().padStart(2, '0');
  }

  const interval = setInterval(updateTimer, 1000);
  updateTimer(); // run immediately
}

document.addEventListener("DOMContentLoaded", startCountdown);