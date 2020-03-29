const element = document.getElementById("body");
element.classList.add("animated", "fadeInUp");
document.getElementById("link1").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/proj_1.html");
  }, 1100);
});
document.getElementById("link").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/home.html");
  }, 1100);
});
document.getElementById("link2").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/proj_2.html");
  }, 1100);
});

document.getElementById("link1").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOut");
  setTimeout(function () {
    body.style.backgroundColor = "#f08080";
  }, 100);
  setTimeout(function () {
    window.location.replace("#");
  }, 2200);
});

document.getElementById("link2").addEventListener("click", function () {
  const element = document.getElementById("body");
  element.classList.add("animated", "fadeOut");
  setTimeout(function () {
    body.style.backgroundColor = "#007856";
  }, 100);
  setTimeout(function () {
    window.location.replace("../html/proj.html");
  }, 2200);
});