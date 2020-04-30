// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

let navbar = document.getElementById("navbar");
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "15px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "white";
    navbar.classList.add("shadow");
    navbar.style.color = "gray";
  } else {
    navbar.style.padding = "60px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    navbar.style.color = "rgba(1, 1, 1, 0.1)";
    navbar.style.background = "transparent";
    navbar.classList.remove("shadow");
  }
}

let review = document.querySelectorAll("ol");
let current = 0;
function interval() {
  setInterval(function slideRight() {
    reset();
    if (current == review.length - 1) {
      startReview();
    } else {
      current++;
      review[current].style.display = "block";
    }
  }, 4000);
}

function reset() {
  for (let i = 0; i < review.length; i++) {
    review[i].style.display = "none";
  }
}
function startReview() {
  review[0].style.display = "block";
  current = 0;
}

interval();

let blogFirst = document.getElementById("latest");
let latest_img = document.getElementById("latest_img");
let blog = document.getElementById("blog");
let blog_img = document.getElementById("blog_img");

function setBlog() {
  blog_img.src = latest_img.src;
}

// setBlog();
