let openModal = document.querySelectorAll(".banner-btn-explore");
let closeModal = document.querySelector(".close-modal");
let btnModal = document.querySelector(".modal-btn");
let modalWrapper = document.querySelector(".modal-wrapper");
let modal = document.querySelector(".modal");
let modal1 = document.querySelector(".modal1");
//console.log(openModal);
//console.log(closeModal);
//console.log(btnModal);
//console.log(modalWrapper);
for (item of openModal) {
  item.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
    modal.style.display = "block";
    modal1.style.display = "none";
  });
}

closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});
btnModal.addEventListener("click", function () {
  modal.style.display = "none";
  modal1.style.display = "block";
});
modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let btnModal1 = document.querySelector(".modal-btn1");

//console.log(openModal);
//console.log(closeModal);
//console.log(btnModal);
//console.log(modalWrapper);

btnModal1.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//the end modal
//start tabs
let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".card");

for (tab of tabs) {
  tab.addEventListener("click", onClickTab);
}
function onClickTab(event) {
  for (tab of tabs) {
    tab.classList.remove("tabs-active");
  }
  let activeTab = event.target;
  activeTab.classList.add("tabs-active");
  let filter = activeTab.getAttribute("data-target");
  console.log(filter);
  for (card of cards) {
    let cardId = card.getAttribute("data-id");
    if (cardId === filter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

for (card of cards) {
  let cardId = card.getAttribute("data-id");
  if (cardId === "centre") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let sliderNext = document.querySelector(".nextBtn");
let sliderBack = document.querySelector(".backBtn");
//console.log(slides);
//console.log(dots);
//console.log(sliderNext);
//console.log(sliderBack);
let activeSlide = 0;
showSlide(activeSlide);

function showSlide(n) {
  if (n > slides.length - 1) {
    activeSlide = 0;
  }
  if (n < 0) {
    activeSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[activeSlide].style.display = "flex";
  dots[activeSlide].classList.add("active");
}
sliderNext.addEventListener("click", function () {
  activeSlide = activeSlide + 1;
  showSlide(activeSlide);
});
sliderBack.addEventListener("click", function () {
  activeSlide = activeSlide - 1;
  showSlide(activeSlide);
});
for (let i = 0; i < slides.length; i = i + 1) {
  dots[i].addEventListener("click", function () {
    activeSlide = i;
    showSlide(activeSlide);
  });
}

//КНОПКАВВЕРХ
$(document).ready(function () {
  $(window).on("scroll", function () {
    console.log("scroll");
    if ($(window).scrollTop() > 100) {
      $(".upButton").fadeIn(100);
    } else {
      $(".upButton").fadeOut(100);
    }
  });
  $(".upButton").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 400);
  });
});
