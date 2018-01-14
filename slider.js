"use strict";

$(document).ready(function(){
    
    //var
    const refreshDuration = 3000;
    const effectDuration = 200;
    
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
});