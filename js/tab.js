/*
    Filter items on button click
*/
$('.filters').on( 'click', '.btn-group', function() {
    var filterValue = $(this).find('input').val();
    // $container.isotope({ filter: filterValue });
    $('.filters .btn-group label').removeClass('glitch-effect');
    $(this).find('label').addClass('glitch-effect');
    $(this).parent().find('box-col').addClass('active-box');
});
