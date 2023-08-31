$.ajax({
    url: './img/map.svg',
    method: 'GET',
    success: function (resp) {
        const map = $(resp).find("svg");

        map.css({
            width: '100%'
        })
        map.attr('viewBox', '189.76863525390627 283.6475140380861 1080.0400000000002 419.6399999999999')

        $('#map-container').append(map)

        $('.regional-btn').click(function (e) {
            e.preventDefault()

            const regionalBtn = $(this)
            $('#badge-static').css({opacity: 0})

            $('html, body').animate({
                scrollTop: map.offset().top - 200
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
                    if (regionalBtn.find('h3:contains("DKI Jakarta")').length > 0) {
                        setTimeout(() => {
                            $('#badge-static').css({opacity: 1})
                        }, 900)
                    }
                }, 900)
            }, 300)

        })
    }
})

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
    $(`.package-tab.active`).removeClass(['active'])
    $(`.package-tab.active:not(.no-animation)`).removeClass(['animate', 'tada'])
    $(`.${target}`).addClass(['active'])
    $(`.${target}:not(.no-animation)`).addClass(['animate', 'tada'])
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

$('.service-content-thumbnail:not(.large)').click(function () {
    const img = $(this).find('img')
    const imgSrc = img.attr('src')
    const imgLarge = $(this).parent('.service-content-thumbnail-wrap').find('.large img')
    const imgLargeSrc = imgLarge.attr('src')
    imgLarge.attr('src', imgSrc)
    img.attr('src', imgLargeSrc)

    // imgLarge.removeClass(['active', 'animate', 'tada'])
    // setTimeout(() => {
    //     imgLarge.addClass(['active', 'animate', 'tada'])
    // }, 50)
})

const sections = $('section');

$(window).scroll(function () {
    const scrollTop = $(window).scrollTop()

    sections.each(function (index, section) {
        const top = $(section).offset().top - 100
        const height = $(section).height()
        if (scrollTop >= top && scrollTop <= top + height) {
            $(`.navbar a[href="#${ $(section).attr('id') }"]`).addClass('active')
        } else {
            $(`.navbar a[href="#${ $(section).attr('id') }"]`).removeClass('active')
        }
    })

    if (scrollTop >= 150) {
        $('.navbar').addClass('on-sticky')
    } else {
        $('.navbar').removeClass('on-sticky')
    }
})

$('#btn-faq').click(function (e) {
    e.preventDefault()
    $('html,body').css({
        overflow: 'hidden',
    })
    $('#modal-faq').addClass('active')
})

$('.modal-btn').click(function (e) {
    e.preventDefault()
    $('html,body').css({
        overflow: 'hidden',
    })
    const target = $(this).data('modal-target')
    $(target).addClass('active')
})

$('.accordion-description').each(function (index, desc) {
    $(desc).attr('data-height', $(desc).height())
    setTimeout(() => {
        $(desc).css({height: '0', overflow: 'hidden'})
    }, 100)
})

$('.accordion-title').click(function (e) {
    e.preventDefault()

    const otherActive = $(this).parents('.accordion-wrap').find(`.accordion:not(#${ $(this).parents('.accordion').attr('id') })`)
    otherActive.removeClass('active')
    otherActive.find('.accordion-description').css({
        height: 0,
    })

    const accordion = $(this).parents('.accordion')
    accordion.toggleClass('active')
    const desc = accordion.find('.accordion-description')
    if (accordion.hasClass('active')) {
        desc.css({
            height: desc.data('height') + 'px',
        })
    } else {
        desc.css({
            height: 0,
        })
    }
})

$('.modal-close').click(function (e) {
    e.preventDefault()
    $(this).parents('.modal').removeClass('active')
    $('html,body').css({
        overflow: 'unset',
    })
})

$('.btn-cookies-confirm').click(function (e) {
    e.preventDefault()
    $('#cookies-confirm').addClass(['animate', 'fade-out-down'])
})

$('.navbar a').click(function () {
    $('.menu-close').click()
})
