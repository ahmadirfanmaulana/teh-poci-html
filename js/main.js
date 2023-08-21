$('.service').click(function (e) {
    e.preventDefault()
    $('.service').removeClass('active')
    $(this).addClass('active')

    $('.service-content-item.active').removeClass(['active', 'animate', 'fade-in-up'])
    $($(this).data('target')).addClass(['active', 'animate', 'fade-in-up'])
})

$('.package-btn').click(function (e) {
    e.preventDefault()
    const target = $(this).data('target')
    $('.package').attr('data-active', target)
    $(`.package-tab.active`).removeClass(['active', 'animate', 'tada'])
    $(`.${target}`).addClass(['active', 'animate', 'tada'])
})

$('.products-tabs a').click(function (e) {
    e.preventDefault()
    const target = $(this).data('target')
    $('.products-tabs .active').removeClass('active')
    $(this).addClass('active')
    $(`.products-tab.active`).removeClass(['active'])
    $(`.${target}`).addClass(['active'])
})

$('.product-item').hover(function () {
    $(this).css({
        background: $(this).data('color'),
        color: '#FFF',
    })
}, function () {
    $(this).css({
        background: '#FFF',
        color: 'inherit'
    })
})


const options = {
    zoomFactor: 1.5,
    maxZoom: 10,
    events: {
        doubleClick: false,
        mouseWheel: false,
        drag: false,
    }
}
var svgPanZoom= $("#map").svgPanZoom(options)

$('.regional-btn').click(function (e) {
    e.preventDefault()

    $('html, body').animate({
        scrollTop: $("#map").offset().top - 200
    }, 0);

    setTimeout(() => {
        const viewbox = $(this).data('viewbox').split(' ')
        svgPanZoom.setViewBox(...viewbox, 500)
    }, 200)

})

const navbarOffsetY = $('.navbar').offset().top
// $(window).scroll(function () {
//     const scrollTop = $(window).scrollTop()
//     if (scrollTop >= navbarOffsetY) {
//         $('.navbar').addClass('navbar-sticky');
//     } else {
//         $('.navbar').removeClass('navbar-sticky');
//     }
// })