$(document).ready(function(){


//mouseenter/mouseleave for lower nav
$(".page1").mouseenter(function(){
        $(".project-name1").fadeTo("fast", 1);
    });
$(".page1").mouseleave(function(){
        $(".project-name1").fadeTo("fast", 0);
    });


$(".page2").mouseenter(function(){
        $(".project-name2").fadeTo("fast", 1);
    });
$(".page2").mouseleave(function(){
        $(".project-name2").fadeTo("fast", 0);
    });


$(".page3").mouseenter(function(){
        $(".project-name3").fadeTo("fast", 1);
    });
$(".page3").mouseleave(function(){
        $(".project-name3").fadeTo("fast", 0);
    });


$(".page4").mouseenter(function(){
        $(".project-name4").fadeTo("fast", 1);
    });
$(".page4").mouseleave(function(){
        $(".project-name4").fadeTo("fast", 0);
    });


$(".page5").mouseenter(function(){
        $(".project-name5").fadeTo("fast", 1);
    });
$(".page5").mouseleave(function(){
        $(".project-name5").fadeTo("fast", 0);
    });


$(".page6").mouseenter(function(){
        $(".project-name6").fadeTo("fast", 1);
    });
$(".page6").mouseleave(function(){
        $(".project-name6").fadeTo("fast", 0);
    });



$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
