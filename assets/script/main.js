$("document").ready(function() {
  // handle navigation tuggle
  $(".nav-bttn").click(function() {
    toggleClasses();
  });

  $(".nav-link").click(function() {
    toggleClasses();
  });

  function toggleClasses() {
    $(".nav-bttn").toggleClass("clicked");
    $(".nav-items").toggleClass("show");
    $("html").toggleClass("no-scroll");
  }

  // add smooth scroll animation when any anchor is clicked
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      400,
      "linear"
    );
  });
});
