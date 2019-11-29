document.getElementById("link").addEventListener("click", function() {
  const element = document.getElementById("about");
  element.classList.add("animated", "fadeOutDown");
  setTimeout(function() {
    window.location.replace("http://127.0.0.1:5500/html/home.html");
  }, 1100);
});
