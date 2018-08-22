$(".accordion_tabs").on("click", ".accordion_header", function () {
  const tab = Array.from(this.classList)
  console.log($(this).parent().next('article').children(`.${tab[1]}`))
  $(this).parent().next('article').children(`.${tab[1]}`).slideToggle();
});