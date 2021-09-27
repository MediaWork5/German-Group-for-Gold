/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    $(".devices-submenu").hover(function(){
       
        $(".devices-submenu > div").slideToggle(250);
        
    });
    
    $(".devices-submenu-mobile").click(function(){
       
        $(".devices-submenu-mobile > div").slideToggle(250);
        
    });
    

    
    $("nav button").click(function(){
       
        $(".theluofmine").css({"right":"0px"});
    });
    
    
    $(".theluofmine i").click(function(){
       
        $(".theluofmine").css({"right":"-300px"});
    });
        
    
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
        
    });
    
    scrollButton.click(function(){
            
            $("html, body").animate({ scrollTop: 0}, 2000);
            
        });
    
    
        //starting the carousel1111111111111
    $('.autoplay1').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 4
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 3
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay2').slick({
    
    });
    });

    
    
        //starting the carousel222222222
    $('.autoplay2').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 1
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay2').slick({
    
    });
    });
    
    
    
    
       //starting the carousel3333333
    $('.autoplay3').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 2
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay3').slick({
    
    });
    });

    
    
     //starting the carousel44444444444
    $('.autoplay4').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 2
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay4').slick({
    
    });
    });

    
        //starting the carousel6666666
    $('.autoplay6').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 2
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay6').slick({
    
    });
    });
    
    $(".albery-container").albery({
        speed: 500, // default: 200
        imgWidth: 400, // default: 600
    });
          
});