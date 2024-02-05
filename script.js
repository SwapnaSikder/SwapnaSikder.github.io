$(document).ready(function(){
    $('#menu-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('header').toggleClass('toggle')
        });
        
    $(window).on('scroll load',function(){
        $('#menu-bars').removeClass('fa-times')
        $('header').removeClass('toggle')
    });
    
});