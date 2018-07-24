console.log('Hi! Welcome to my portfolio site');

$(document).ready(function () {
  $('.project').on('mouseenter', function () {
    $(this).find('.project-details').slideToggle();
  });
  $('.project').on('mouseleave', function () {
    $(this).find('.project-details').fadeOut();
  });
});
