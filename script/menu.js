$('#sidebar-container').mouseenter(function(){
    $(".page-container").removeClass("sidebar-collapsed").addClass("sidebar-collapsed-back");
});

$('#sidebar-container').mouseleave(function(){
    $(".page-container").addClass("sidebar-collapsed").removeClass("sidebar-collapsed-back");
});
