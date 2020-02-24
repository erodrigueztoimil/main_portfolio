$("document").ready(function() {
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

  $(document).ready(
    // add smooth scroll animation to html
    $('a[href*="#"]').on("click", function(e) {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        700,
        "linear"
      );
    })
  );
});
