$(".accordion_tab").on("click", ".accordion_header", function () {
  $(this).toggleClass("active").next().slideToggle();
});