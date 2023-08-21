$('.service').click(function (e) {
    e.preventDefault()
    $('.service').removeClass('active')
    $(this).addClass('active')

    $('.service-content-item.active').removeClass(['active', 'animate', 'fade-in-up'])
    $($(this).data('target')).addClass(['active', 'animate', 'fade-in-up'])

    $('.large img').removeClass(['active', 'animate', 'tada'])
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

const map = $('#map')

$('.regional-btn').click(function (e) {
    e.preventDefault()

    $('html, body').animate({
        scrollTop: $("#map").offset().top - 200
    }, 0);

    setTimeout(() => {
        const viewBox = $(this).data('viewbox').split(' ')
        gsap.to(map, {
            duration: 1,
            attr: { viewBox: '0 0 2077 807' },
            ease: "power3.inOut"
        });
        setTimeout(() => {
            gsap.to(map, {
                duration: 1,
                attr: { viewBox },
                ease: "power3.inOut"
            });
        }, 900)
    }, 300)

})

$('.service-content-thumbnail:not(.large)').click(function () {
    const img = $(this).find('img')
    const imgSrc = img.attr('src')
    const imgLarge = $(this).parent('.service-content-thumbnail-wrap').find('.large img')
    const imgLargeSrc = imgLarge.attr('src')
    imgLarge.attr('src', imgSrc)
    img.attr('src', imgLargeSrc)

    imgLarge.removeClass(['active', 'animate', 'tada'])
    setTimeout(() => {
        imgLarge.addClass(['active', 'animate', 'tada'])
    }, 50)
})