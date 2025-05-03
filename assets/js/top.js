$(function(){
    $(".search input").on("focus",function(){
        $(".search-list").fadeIn(100);
    });
    $(".search input").on("focusout",function(){
        $(".search-list").fadeOut(100);
    });
});