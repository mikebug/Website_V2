const element = document.getElementById("body");
element.classList.add("animated", "fadeInUp");
document.getElementById("link").addEventListener("click", function () {
  const element = document.getElementById("about");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function () {
    body.style.backgroundColor = "#ffffff";
  }, 100);
  setTimeout(function () {
    window.location.replace("../html/home.html");
  }, 1100);
});
