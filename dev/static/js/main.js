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

    rangeSlider();
    checkboxExpandableList();

});