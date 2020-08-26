$(document).ready(function () {
    svg4everybody({});

    let rangeSlider = function () {
        $(".js-range-slider").ionRangeSlider({
            skin: "big",
            type: "double",
            min: 0,
            max: 15000,
            from: 5000,
            to: 10000
        });
    };

    let checkboxExpandableList = function () {
        $(document).on('click', '.checkbox__icon', function () {
            $('.checkbox-expandable-list').toggleClass('checkbox-expandable-list--open');
            $('.checkbox__icon').toggleClass('checkbox__icon--open');
        });
    }

    let roomCardSlider = function () {
        $('.js-room-card-slider').each(function (idx) {
            let roomCardSliderClass = "room-card-slider-" + idx;
            this.closest('.room-card-slider').classList.add(roomCardSliderClass);
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                prevArrow: '.' + roomCardSliderClass + " .room-card-slider__navigation--prev",
                nextArrow: '.' + roomCardSliderClass + " .room-card-slider__navigation--next",
                appendDots: '.' + roomCardSliderClass + ' .room-card-slider__dots',
                customPaging : function(slider, i) {
                    return '<div class="room-card-slider__dot"></div>';
                }
            });
        });
    }

    rangeSlider();
    checkboxExpandableList();
    roomCardSlider();

});