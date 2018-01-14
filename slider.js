"use strict";

$(document).ready(function(){
    
    //var
    const refreshDuration = 7000;
    const effectDuration = 1000;
    
    var elementsNumber;
    var sliderImages = [];
    
    //main
    getImages();
    console.log(elementsNumber);
    
    var pointer = 0;
    setTimeout(function(){
        refreshSlider(pointer);
    },0);
    
    //fx
    function refreshSlider(pointer){
        
        moveBar();
        if(pointer==0){
            $(sliderImages[elementsNumber-1]).fadeOut(effectDuration, function(){
                $(sliderImages[pointer]).fadeIn(effectDuration);
                pointer++;
            });
        }
        
        $(sliderImages[pointer-1]).fadeOut(effectDuration, function(){
             $(sliderImages[pointer]).fadeIn(effectDuration);
            pointer++;
        });
        
        if(pointer==elementsNumber){
            pointer=0;
        }
        
        setTimeout(function(){
            refreshSlider(pointer);
        },refreshDuration);
    }
    function getImages(){
        var slider = document.getElementsByClassName("slider")[0];
        var images = slider.getElementsByTagName("img");
        for(var i=0;i<images.length;i++){
            sliderImages[i] = images[i];
        }
        elementsNumber = images.length;
    }
    function moveBar(){
        
        var barHolder = document.getElementsByClassName("sliderBar")[0];
        var barProgress = barHolder.getElementsByTagName("div")[0];
        barProgress.style.width = "100%";
        $(barProgress).stop();
        $(barProgress).animate({
            width: "0%"
        },refreshDuration, "linear");
    }

});