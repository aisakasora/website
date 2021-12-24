$(function() {
    $("#test").click(function() {
        $(".test").modal('show');
    });
    $(".test").modal({
        closable: true
    });
    $('.ui.sticky')
        .sticky({
            context: '#photo1'
        });

    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});