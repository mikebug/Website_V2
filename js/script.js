(function () {
  var loading = 0;
  var id = setInterval(frame, 64);

  function frame() {
    if (loading == 60) {
      window.open("/html/home.html", "_self");
    } else {
      loading = loading + 1;
      if (loading == 50) {
        loader_gif.style.animation = "fadeout 1s ease";
        myProgress.style.animation = "fadeout 1s ease";
        myBar.style.animation = "fadeout 1s ease";
      }
    }
  }
})();
