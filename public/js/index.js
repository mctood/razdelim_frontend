$(() => {
    $(".owed-cards").owlCarousel({
        loop:false,
        dots: false,
        nav: false,
        margin:20,
        autoWidth: true,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
    })
    $(".owed-card, .owe-bill, .group__owe-bill").on("tap", function(event) {
        location.href = "/bill"
    })
    $(".group-bill").on("tap", function(event) {
        location.href = "/group"
    })
})
function setMode(mode) {
    switch (mode) {
        case 'i_owe':
            $("button.active").removeClass("active");
            $("button.i_owe").addClass("active");
            $(".group__i_owe").show()
            $(".group__owed_to_me").hide()
            break;
        case 'owed_to_me':
            $("button.active").removeClass("active");
            $("button.owed_to_me").addClass("active");
            $(".group__i_owe").hide()
            $(".group__owed_to_me").show();
            break;
    }
}