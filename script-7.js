
$(document).ready(function() {
    var itemsToShow = 20;
    var itemToMove = 6;
    var currentIndex = 0;

    $('.body-middle-hotsearch-content-item').hide();
    for (var i = 0; i < itemsToShow; i++) {
        $('.body-middle-hotsearch-content-item:eq(' + i + ')').show();
    }

    $('#hotsearch-prevBtn').hide();

    $('#hotsearch-nextBtn').click(function() {
        if (currentIndex >= 0 && currentIndex < 12) {
            currentIndex += itemToMove;
            $('.body-middle-hotsearch-section').css('transform', 'translateX(-' + (currentIndex * 210) + 'px)');
        }

        if (currentIndex > 0) {
            $('#hotsearch-nextBtn').show();
            $('#hotsearch-prevBtn').show();
        }

        if (currentIndex >= 12) {
            $('#hotsearch-nextBtn').hide();
            $('#hotsearch-prevBtn').show();
        }
    });

    $('#hotsearch-prevBtn').click(function() {
        if (currentIndex > 0) {
            currentIndex -= itemToMove;
            $('.body-middle-hotsearch-section').css('transform', 'translateX(-' + (currentIndex * 210) + 'px)');
        }

        if (currentIndex === 0) {
            $('#hotsearch-nextBtn').show();
            $('#hotsearch-prevBtn').hide();
        }

        if (currentIndex > 0) {
            $('#hotsearch-nextBtn').show();
            $('#hotsearch-prevBtn').show();
        }
    });
});
