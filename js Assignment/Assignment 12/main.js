var imgs =document.querySelectorAll("img");
var layer =document.querySelector(".layer");
var imgBox=document.querySelector(".img-box");
var xmark=document.querySelector(".fa-square-xmark");
var next=document.querySelector(".fa-angle-right");
var previos=document.querySelector(".fa-angle-left");


var currentIndex=0;
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click',function(){
        layer.classList.remove("d-none");
        var imgSrc= imgs[i].getAttribute("src");
        imgBox.style.backgroundImage=`url(${imgSrc})`;
        currentIndex=i;
        
    })
    
}

//click

xmark.addEventListener('click',function(){
    layer.classList.add("d-none");
})

next.addEventListener("click",function(){
    
     currentIndex++
     if(currentIndex == imgs.length){
        currentIndex=0;
     }
var imgSrc= imgs[currentIndex].getAttribute("src");
        imgBox.style.backgroundImage=`url(${imgSrc})`;     
})
previos.addEventListener("click",function(){
        currentIndex--

        if(currentIndex==-1){
            currentIndex=imgs.length-1
        }
        var imgSrc= imgs[currentIndex].getAttribute("src");
        imgBox.style.backgroundImage=`url(${imgSrc})`;})


//keyDown

document.addEventListener('keydown',function(e){
    if(e.key=="ArrowRight"){
         currentIndex++
     if(currentIndex == imgs.length){
        currentIndex=0;
     }
        var imgSrc= imgs[currentIndex].getAttribute("src");
        imgBox.style.backgroundImage=`url(${imgSrc})`;
    }
})
document.addEventListener('keydown',function(e){
    if(e.key=="ArrowLeft"){
        currentIndex--;
        if(currentIndex==-1){
            currentIndex=imgs.length-1
        }
        var imgSrc=imgs[currentIndex].getAttribute("src");
        imgBox.style.backgroundImage=`url(${imgSrc})`
    }
})

document.addEventListener("keydown",function(e){
    if(e.key=="Escape"){
        layer.classList.add("d-none");
    }
})