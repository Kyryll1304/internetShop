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
    let details = document.getElementById("order-wrap");
    let current = document.getElementsByClassName("info-active");

    if (current.length > 0) {
      details.classList.remove("info-block");
      details.classList.add("order-active");
    }
  });
}
document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let name = document.forms["myForm"]["name"].value;
    let city = document.forms["myForm"]["city"].value;
    let postOffice = document.forms["myForm"]["post-office"].value;
    let dropdown = document.forms["myForm"]["dropdown"].value;
    let quantity = document.forms["myForm"]["quantity"].value;

    const activeBlock = document.querySelector(".info-active");
    const title = activeBlock.querySelector("h2").innerHTML;
    const text = activeBlock.querySelector("p").innerHTML;

    if (
      name == "" ||
      city == "" ||
      postOffice == "" ||
      dropdown == "" ||
      quantity == ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    let postOfficePattern = /^\d+$/;
    if (!postOfficePattern.test(postOffice)) {
      alert("Please enter a valid number in the post office field.");
      return;
    }

    if (dropdown != "option1" && dropdown != "option2") {
      alert("Please select a valid option from the dropdown menu.");
      return;
    }

    alert(
      `Назва: ${title}\nОпис: ${text}\nПІБ: ${name}\nМісто: ${city}\nВідділення НП: ${postOffice} ітд.`
    );
    document.getElementById("myForm").submit();
  });
