
$(document).ready(function() {
    var itemsToShow = 14;
    var itemToMove = 4;
    var currentFirstRowIndex = 0;
    var currentSecondRowIndex = 0;

    $('.categories-item-details').hide();
    for (var i = 0; i < itemsToShow; i++) {
        $('.first-row .categories-wrapper .categories-item-details:eq(' + i + ')').show();
        $('.second-row .categories-wrapper .categories-item-details:eq(' + i + ')').show();
    }

    $('#prevBtn-category').hide();

    $('#nextBtn-category').click(function() {
        if (currentFirstRowIndex === 0) {
            currentFirstRowIndex += itemToMove;
            $('.first-row .categories-wrapper').css('transform', 'translateX(-' + (currentFirstRowIndex * 126) + 'px)');
        }

        if (currentSecondRowIndex === 0) {
            currentSecondRowIndex += itemToMove;
            $('.second-row .categories-wrapper').css('transform', 'translateX(-' + (currentSecondRowIndex * 126) + 'px)');
        }

        if (currentFirstRowIndex != 0 && currentSecondRowIndex != 0) {
            $('#nextBtn-category').hide();
            $('#prevBtn-category').show();
        }
    });

    $('#prevBtn-category').click(function() {
        if (currentFirstRowIndex > 0) {
            currentFirstRowIndex -= itemToMove;
            $('.first-row .categories-wrapper').css('transform', 'translateX(-' + (currentFirstRowIndex * 126) + 'px)');
        }

        if (currentSecondRowIndex > 0) {
            currentSecondRowIndex -= itemToMove;
            $('.second-row .categories-wrapper').css('transform', 'translateX(-' + (currentSecondRowIndex * 126) + 'px)');
        }

        if (currentFirstRowIndex === 0 && currentSecondRowIndex === 0) {
            $('#nextBtn-category').show();
            $('#prevBtn-category').hide();
        }
    });
});
