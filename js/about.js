const element = document.getElementById("body");
element.classList.add("animated", "fadeIn");
document.getElementById("link").addEventListener("click", function () {
  const element = document.getElementById("about");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/home.html");
  }, 1100);
});
document.getElementById("link").addEventListener("click", function () {
  const element = document.getElementById("particles-js");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    window.location.replace("../html/home.html");
  }, 1100);
});
