$(function() {
    $("nav div:not(.active)").on("mouseover", function ( event ) {
        $(this).find("a").animate({
            color : "red"
        }, 300)
    })

    $("nav div:not(.active)").on("mouseout", function ( event ) {
        $(this).find("a").animate({
            color : "black"
        }, 300)
    })
})