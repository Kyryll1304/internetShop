const phones = document.getElementById("phones");
const laptops = document.getElementById("laptops");
const tablets = document.getElementById("tablets");

const phonesBtn = document.getElementById("phones-btn");
const laptopsBtn = document.getElementById("laptops-btn");
const tabletsBtn = document.getElementById("tablets-btn");

window.onload = function () {
  phones.classList.remove("items-wrap");
  phones.classList.add("active");
};

phonesBtn.onclick = function () {
  let obj = document.getElementsByClassName("active")[0];
  obj.classList.remove("active");
  obj.classList.add("items-wrap");
  phones.classList.remove("items-wrap");
  phones.classList.add("active");
};

laptopsBtn.onclick = function () {
  let obj = document.getElementsByClassName("active")[0];
  obj.classList.remove("active");
  obj.classList.add("items-wrap");
  laptops.classList.remove("items-wrap");
  laptops.classList.add("active");
};

tabletsBtn.onclick = function () {
  let obj = document.getElementsByClassName("active")[0];
  obj.classList.remove("active");
  obj.classList.add("items-wrap");
  tablets.classList.remove("items-wrap");
  tablets.classList.add("active");
};

let infoPhonesBtn = document.getElementsByClassName("info-phones");
let infoLaptopsBtn = document.getElementsByClassName("info-laptops");
let infoTabletsBtn = document.getElementsByClassName("info-tablets");

let buyBtn = document.getElementsByClassName("buy-btn");

let infoPhones = document.getElementById("info-phone");
let infoLaptops = document.getElementById("info-laptops");
let infoTablets = document.getElementById("info-tablets");

for (let i = 0; i < infoPhonesBtn.length; i++) {
  infoPhonesBtn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("info-active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        "info-active",
        "info-block"
      );
    }
    infoPhones.classList.remove("info-block");
    infoPhones.classList.add("info-active");
  });
}
for (let i = 0; i < infoLaptopsBtn.length; i++) {
  infoLaptopsBtn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("info-active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        "info-active",
        "info-block"
      );
    }
    infoLaptops.classList.remove("info-block");
    infoLaptops.classList.add("info-active");
  });
}
for (let i = 0; i < infoTabletsBtn.length; i++) {
  infoTabletsBtn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("info-active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        "info-active",
        "info-block"
      );
    }
    infoTablets.classList.remove("info-block");
    infoTablets.classList.add("info-active");
  });
}
for (let i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("info-active");
    if (current.length > 0) {
      alert("Added to cart");
      current[0].className = current[0].className.replace(
        "info-active",
        "info-block"
      );
    }
  });
}
