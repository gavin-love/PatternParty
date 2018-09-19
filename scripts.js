
const toggleLinks = (event) => {
  event.preventDefault();
  $('a').slideToggle();
}

const links = () => {
  if ($(window).width() > 801) {
    $('a').css('display', 'block')
  }
}


$(window).on('resize', links);
$('.triggerToggle').on('click', toggleLinks);