
const toggleLinks = (event) => {
  event.preventDefault();
  $('a').slideToggle();
}
$('.triggerToggle').on('click', toggleLinks);