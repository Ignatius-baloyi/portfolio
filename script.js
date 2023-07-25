$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navabar').addClass("sticky");

        }else{
            $('.navabar').removeClass("sticky");

        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }     
    });
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navabar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer", "Business Analyst", "Database Administrator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Software Developer", "Business Analyst", "Database Administrator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
  
});


  
