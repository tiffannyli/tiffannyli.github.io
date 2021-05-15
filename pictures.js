$(document).ready(function () {
  var tabs = $(".tabs > li");

  tabs.on("click", function () {
    tabs.removeClass("active");
    $(this).addClass("active");

    var pages = $(".page");

    pages.removeClass("active");
    var page = $(this).data("page");
    $("#" + page).addClass("active");
  });

  $(".pic").on("click", function(){
    let parent = $(this).parent()
    let content = parent.find(".content")
    content.toggleClass("show")
  })
});



