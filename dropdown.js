$(document).ready(function () {
    // Toggle dropdown on menu button click
    $('.menu-toggle').click(function () {
        $('.dropdown-menu').toggleClass('active');
        $(this).toggleClass('active');
    });
});