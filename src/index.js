// navigatigation class handlers
jQuery(
  function() {
    var menuBttn = $('.menu-bttn');
    var menuItems = $('.menu-items');
    var a = $('nav a');

    menuBttn.click(() => {
      $('html').toggleClass('overflow');
      $(menuBttn).toggleClass('clicked');
      $(menuItems).toggleClass('show');
    });

    a.click(() => {
      $('html').removeClass('overflow');
      $(menuItems).removeClass('show');
      $(menuBttn).removeClass('clicked');
    });
  }
)

// navigation active handler
$(window).scroll(
  function() {
    var navLink = $('.link');
    var scrollLocation = $(this).scrollTop();

    navLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 80;

      if ( sectionOffset <= scrollLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  }
)

// typewriter animation
var i = 0;
var text = "Hello World!";
var speed = 200;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (i < text.length ) {
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
