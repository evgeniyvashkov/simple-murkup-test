(function ($) {
    $(window).on("load", function () {
        //Dropdown
        $('select').styler();
        
        //Dropdown custom Scroll
        $(".jq-selectbox__dropdown ul").mCustomScrollbar();

        //Range
        var slider = document.getElementById('range');

        noUiSlider.create(slider, {
            start: [75],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });

        var rangeSliderValueElement = document.getElementById('range-value');
        var rangeInputElement = document.getElementById('input-range-value');

        slider.noUiSlider.on('update', function (values, handle) {
            var _value = Math.round(values[handle]) + '%';
            rangeSliderValueElement.innerHTML = _value;
            rangeInputElement.value = _value;
        });
    });
})(jQuery); 