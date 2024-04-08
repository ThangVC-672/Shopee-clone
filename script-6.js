
$(document).ready(function() {
    var itemsToShow = 10;
    var itemToMove = 4;
    var currentFirstRowIndex = 0;
    var currentSecondRowIndex = 0;

    $('.malls-categories-item-details').hide();
    for (var i = 0; i < itemsToShow; i++) {
        $('.malls-first-row .malls-categories-wrapper .malls-categories-item-details:eq(' + i + ')').show();
        $('.malls-second-row .malls-categories-wrapper .malls-categories-item-details:eq(' + i + ')').show();
    }

    $('#malls-prevBtn-category').hide();

    $('#malls-nextBtn-category').click(function() {
        if (currentFirstRowIndex === 0) {
            currentFirstRowIndex += itemToMove;
            $('.malls-first-row .malls-categories-wrapper').css('transform', 'translateX(-' + (currentFirstRowIndex * 195) + 'px)');
        }

        if (currentSecondRowIndex === 0) {
            currentSecondRowIndex += itemToMove;
            $('.malls-second-row .malls-categories-wrapper').css('transform', 'translateX(-' + (currentSecondRowIndex * 195) + 'px)');
        }

        if (currentFirstRowIndex != 0 && currentSecondRowIndex != 0) {
            $('#malls-nextBtn-category').hide();
            $('#malls-prevBtn-category').show();
        }
    });

    $('#malls-prevBtn-category').click(function() {
        if (currentFirstRowIndex > 0) {
            currentFirstRowIndex -= itemToMove;
            $('.malls-first-row .malls-categories-wrapper').css('transform', 'translateX(-' + (currentFirstRowIndex * 195) + 'px)');
        }

        if (currentSecondRowIndex > 0) {
            currentSecondRowIndex -= itemToMove;
            $('.malls-second-row .malls-categories-wrapper').css('transform', 'translateX(-' + (currentSecondRowIndex * 195) + 'px)');
        }

        if (currentFirstRowIndex === 0 && currentSecondRowIndex === 0) {
            $('#malls-nextBtn-category').show();
            $('#malls-prevBtn-category').hide();
        }
    });
});
