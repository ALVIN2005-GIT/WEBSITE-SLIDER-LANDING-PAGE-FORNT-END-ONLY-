// NAVBAR SCROLL FUNCTION
let scrollTimeout;

window.addEventListener("scroll", function () {
  clearTimeout(scrollTimeout);

  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY;

  const scrollThreshold = 100;

  if (scrollY > scrollThreshold) {
    navbar.style.borderBottom = "#ffF";
  } else {
    navbar.style.borderColor = "#173884";
  }

  scrollTimeout = setTimeout(function () {
    navbar.style.borderColor = "#173884";
  }, 50);
});
// HERO SECTION IMAGE SLIDER
const heroSliders = document.querySelectorAll(".hero-slider");
let currentSlideIndex = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlideIndex = heroSliders.length - 1;
  } else if (slideIndex >= heroSliders.length) {
    currentSlideIndex = 0;
  }

  const offset = -currentSlideIndex * 100; // Assuming each section is 100% wide

  heroSliders.forEach((slider, index) => {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${offset}%)`; // Slide to the left
  });
}

function nextSlide() {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
}

setInterval(nextSlide, 3000);

showSlide(currentSlideIndex);

// TOGGLE KELAS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");

// KETIKA HAMBURGER MENU DI KLIK
document.querySelector("#hard-drive").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// KLIK DILUAR SIDEBAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector("#hard-drive");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    e.preventDefault;
  }
});

// FORM VALIDATION EMAIL, NAMA, DAN PHONE

var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

var phonePattern = /^0\d{9,11}$/;

var namaPattern = /^[a-zA-Z]{3,}$/;

// FUNCTION VALIDASI
let emailInput = document.querySelector('input[placeholder="Masukkan E-Mail"]');
let phoneInput = document.querySelector('input[placeholder="No.Telepon"]');
let nameInput = document.querySelector('input[placeholder="Masukkan Nama"]');
let inputgroup1 = document.querySelector(".input-group1");
let inputgroup2 = document.querySelector(".input-group2");
let inputgroup3 = document.querySelector(".input-group3");
let errorParagraph = document.querySelector(".error-message");
let successParagraph = document.querySelector(".success-message");

function validateForm(event) {
  // DEKLARASI VARIABEL

  //  RESET CLASS ERROR

  inputgroup1.classList.remove("error");
  inputgroup2.classList.remove("error");
  inputgroup3.classList.remove("error");
  inputgroup1.style.border = "";
  inputgroup2.style.border = "";
  inputgroup3.style.border = "";

  let isValid = true;
  let errorMessage = "";

  // NAME IMPUT VALIDATION
  if (nameInput.value === "") {
    inputgroup1.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nama Kosong. ";
  } else if (!namaPattern.test(nameInput.value)) {
    inputgroup1.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nama tidak valid. ";
  }

  // EMAIL IMPUT VALIDATION
  if (emailInput.value.trim() === "") {
    inputgroup2.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Email Kosong. ";
  } else if (!emailPattern.test(emailInput.value)) {
    inputgroup2.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Email Tidak Valid. ";
  }

  // PHONE INPUT VALIDATION
  if (phoneInput.value.trim() === "") {
    inputgroup3.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nomor Telepon Kosong. ";
  } else if (!phonePattern.test(phoneInput.value)) {
    inputgroup3.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Nomor Telepon Tidak Valid. ";
  }

  if (!isValid) {
    errorParagraph.textContent = errorMessage;
    errorParagraph.style.display = "block";
    event.preventDefault();
    successParagraph.style.display = "none";
  } else {
    errorParagraph.style.display = "none";
    successParagraph.textContent = "Terima Kasih, Data Anda Telah Terkirim.";
    event.preventDefault();
    successParagraph.style.display = "block";
    emailInput.value = "";
    phoneInput.value = "";
    nameInput.value = "";
  }
}

nameInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validateForm(e); // Call the validateForm function when Enter is pressed
  }
});
emailInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validateForm(e); // Call the validateForm function when Enter is pressed
  }
});
phoneInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validateForm(e); // Call the validateForm function when Enter is pressed
  }
});
