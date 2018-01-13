$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
});

$('.highligh').typeIt({
     strings: 'This is a simple string.',
     speed: 90,
     autoStart: false

});


$(function(){
    $(".flip").flip({
        trigger: 'hover',
        speed : 1000
    });
});