"use strict";

$(document).ready(function(){
    
    //var
    const refreshDuration = 3000;
    const effectDuration = 400;
    
    var elementsNumber;
    var sliderImages = [];
    
    //main
    getImages();
    buildCounter();
    
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
        refreshCounter(pointer);
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
    function buildCounter(){
        
        var validWidth = 100/elementsNumber+"%";
        
        var counterHolder = document.getElementsByClassName("counter")[0];
        
        for(var i=0;i<elementsNumber;i++){
            var newOne = document.createElement("div");
            newOne.style.width = validWidth;
            counterHolder.appendChild(newOne);
        }
    }
    function refreshCounter(pointer){
        
        var counterHolder = document.getElementsByClassName("counter")[0];
        var counter = counterHolder.getElementsByTagName("div");
        
        for(var i=0;i<counter.length;i++){
            counter[i].classList.remove("activeCounter");
        }
        counter[pointer].classList.add("activeCounter");
    }
});