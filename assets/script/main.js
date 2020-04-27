$("document").ready(function () {
  // tuggle navigation
  $(".nav-bttn").click(function () {
    toggleClasses();
  });

  $(".nav-link").click(function () {
    toggleClasses();
  });

  function toggleClasses() {
    $(".nav-bttn").toggleClass("clicked");
    $(".nav-items").toggleClass("show");
    $("html").toggleClass("no-scroll");
  }

  // add smooth scroll animation when any anchor is clicked
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // automated copyright year
  let year = new Date().getFullYear();
  $("#year").text(year);
});
