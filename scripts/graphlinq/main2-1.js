function quote() {
    const newsSwiper = new Swiper("#testimonial-slider", {
        slidesPerView: 1.1,
        spaceBetween: 160,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
        mousewheel: {
            forceToAxis: true
        },

        autoHeight: true,
        keyboard: true,
        // Responsive breakpoints
        breakpoints: {
            0: { /* when window >=0px - webflow mobile landscape/portriat */
                slidesPerView: 1,
                slidesPerGroup: 1,

            },
            480: { /* when window >=0px - webflow mobile landscape/portriat */
                slidesPerView: 1.7,
                slidesPerGroup: 1,

            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 1.3
            }
        },
        navigation: {
            nextEl: "#testimonial-right",
            prevEl: "#testimonial-left",
        }
    });
}

function swiperMenu() {
    const newsSwiper = new Swiper("#swiper-menu", {
        slidesPerView: 1.1,
        spaceBetween: 24,
    });
}


function accordion() {
    var accordion = (function () {

        var $accordion = $('.add-ons_js-accordion');
        var $accordion_header = $accordion.find('.add-ons_js-accordion-header');
        var $accordion_item = $('.add-ons_js-accordion-item');

        // default settings 
        var settings = {
            speed: 100, // animation speed
            oneOpen: false, // close all other accordion items if true
        };

        return {
            init: function ($settings) {
                $accordion_header.on('click', function () {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

                if (settings.oneOpen && $('.add-ons_js-accordion-item.active').length > 1) {
                    $('.add-ons_js-accordion-item.active:not(:first)').removeClass('active');
                }

                $('.add-ons_js-accordion-item.active').find('> .add-ons_js-accordion-body').show();
            },
            toggle: function ($this) {
                if (settings.oneOpen && $this[0] != $this.closest('.add-ons_js-accordion').find('> .add-ons_js-accordion-item.active > .add-ons_js-accordion-header')[0]) {
                    $this.closest('.add-ons_js-accordion')
                        .find('> .add-ons_js-accordion-item')
                        .removeClass('active')
                        .find('.add-ons_js-accordion-body')
                        .slideUp()
                }

                $this.closest('.add-ons_js-accordion-item').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed, function () {
                    // После завершения slideToggle проверяем, активный ли элемент
                    if ($this.closest('.add-ons_js-accordion-item').hasClass('active')) {
                        // Рассчитываем отступ
                        var offsetTop = $this.offset().top - $(window).height() * 0.2;
                        // Плавная прокрутка к активному заголовку аккордеона с учетом отступа
                        $('html, body').animate({
                            scrollTop: offsetTop
                        }, settings.speed);
                    }
                });
            }
        }
    })();

    $(document).ready(function () {
        accordion.init({ speed: 400, oneOpen: true });
    });
}

function currentExhcnage() {
    fetch('https://api.coinbase.com/v2/exchange-rates?currency=GLQ')
        .then(response => response.json())
        .then(data => {
            // Предположим, что вам нужно значение валюты относительно USD
            const rate = data.data.rates.USD;

            // Округляем до 4 знаков после запятой и добавляем знак доллара
            const formattedRate = `$${parseFloat(rate).toFixed(4)}`;

            // Находим элемент с идентификатором 'currentprice' и устанавливаем значение
            const element = document.getElementById('currentprice'); // Убираем '#' перед идентификатором
            if (element) { // Проверяем, существует ли элемент
                element.textContent = formattedRate;
            }
        })
        .catch(error => console.error('Error fetching data:', error));

}


function launch() {
    currentExhcnage();
    quote();
    swiperMenu();
    accordion();
}

launch();