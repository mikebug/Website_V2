
  window.onload=function(){
    document.getElementById("about").addEventListener("click", function() {
        const element = document.getElementById("body");
        element.classList.add("animated", "fadeOutDown");
        setTimeout(function() {
          window.location.replace("http://127.0.0.1:5500/html/home.html");
        }, 1100);
      });
      document.getElementById("back").addEventListener("click", function() {
        const element = document.getElementById("body");
        element.classList.add("animated", "fadeOutDown");
        setTimeout(function() {
          window.location.replace("http://127.0.0.1:5500/html/Gallery.html");
        }, 1100);
      });
  }