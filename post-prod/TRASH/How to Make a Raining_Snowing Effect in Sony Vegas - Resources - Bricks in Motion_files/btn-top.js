(function() {
  "use strict";
  const btnTop = document.querySelector(".btn-top");
  btnTop.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}());
