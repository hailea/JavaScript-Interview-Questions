$(document).ready(function () {
    $(".bigWord").on("click", function () {
        $(".defn").removeClass("myReply");
        $(this).children().addClass("myReply");
    });
    $(".bigWord").on("dblclick", function () {
        $(".defn").removeClass("myReply");
        
    });
});
    
