// taggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle icon and navbar when click navbar link(scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

function toggleText() {
  var hiddenText = document.getElementById("hidden-text");
  var btnText = document.getElementById("read-more-btn");
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    btnText.innerHTML = "Read Less";
  } else {
    hiddenText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
};