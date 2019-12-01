const element = document.getElementById("body");
element.classList.add("animated", "fadeInUp");
document.getElementById("link1").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/about.html");
  }, 1100);
});
document.getElementById("link2").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/portfolio.html");
  }, 1100);
});
document.getElementById("link3").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/Gallery.html");
  }, 1100);
});
document.getElementById("link4").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/contact.html");
  }, 1100);
});

document.getElementById("proj").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOut");
  setTimeout(function () {
    body.style.backgroundColor = "#ba6c58";
  }, 100);
  setTimeout(function () {
    window.location.replace("../html/proj.html");
  }, 2200);
});
document.getElementById("proj2").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOut");
  setTimeout(function () {
    body.style.backgroundColor = "#f3a748";
  }, 100);
  setTimeout(function () {
    window.location.replace("#");
  }, 2200);
});
document.getElementById("proj3").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOut");
  setTimeout(function () {
    body.style.backgroundColor = "#eac57a";
  }, 100);
  setTimeout(function () {
    window.location.replace("#");
  }, 2200);
});
document.getElementById("proj4").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOut");
  setTimeout(function () {
    body.style.backgroundColor = "#486664";
  }, 100);
  setTimeout(function () {
    window.location.replace("#");
  }, 2200);
});

$(function () {
  var $slides = $(".slide");
  var currentSlide = 0;
  TweenLite.set($slides.filter(":gt(0)"), { left: "960px" });
  TweenLite.delayedCall(4, nextSlide);
  function nextSlide() {
    TweenLite.to($slides.eq(currentSlide), 1, { left: "-960px" });
    if (currentSlide < $slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    TweenLite.fromTo(
      $slides.eq(currentSlide),
      1,
      { left: "960px" },
      { left: "0px" }
    );
    TweenLite.delayedCall(4, nextSlide);
  }
});
