
$(document).ready(function() {
    var itemsToShow = 16;
    var itemToMove = 5;
    var currentIndex = 0;

    $('.body-middle-flashsales-section-item').hide();
    for (var i = 0; i < itemsToShow; i++) {
        $('.body-middle-flashsales-section-item:eq(' + i + ')').show();
    }

    $('#prevBtn-flashsale').hide();

    $('#nextBtn-flashsale').click(function() {
        if (currentIndex >= 0) {
            currentIndex += itemToMove;
            $('.body-middle-flashsales-section').css('transform', 'translateX(-' + (currentIndex * 210) + 'px)');
        }

        if (currentIndex > 0) {
            $('#nextBtn-flashsale').show();
            $('#prevBtn-flashsale').show();
        }

        if (currentIndex >= 10) {
            $('#nextBtn-flashsale').hide();
            $('#prevBtn-flashsale').show();
        }
    });

    $('#prevBtn-flashsale').click(function() {
        if (currentIndex > 0) {
            currentIndex -= itemToMove;
            $('.body-middle-flashsales-section').css('transform', 'translateX(-' + (currentIndex * 210) + 'px)');
        }

        if (currentIndex === 0) {
            $('#nextBtn-flashsale').show();
            $('#prevBtn-flashsale').hide();
        }

        if (currentIndex > 0) {
            $('#nextBtn-flashsale').show();
            $('#prevBtn-flashsale').show();
        }
    });
});
