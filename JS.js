$(document).ready(function() {
    
    var div;
    var dim;
    var i;
    for ( i=0;i<20;i++){
        
        div = document.createElement("div"+i);
        dim = 80+15*(i%6);
            div.style.cssText = "width:"+dim+"px;height:"+dim+"px;content:url(../images/diamond.png);position:fixed;animation: speed"+i%5+" 3s infinite linear;"

       //document.getElementById("container").appendChild(div);
       document.body.appendChild(div);
        
        animateDiv($("div"+i),i%4);
        
    }
    var $scrollingDiv = $("#topbar");
     $(window).scroll(function () {
         $scrollingDiv.css("background-color", "rgba(255, 255, 255,"+($(window).scrollTop() / $(".parent").height() )+")");
         
         $(".hvr-shadow").css("box-shadow"," 0 10px 10px -10px rgba(0, 0, 0, "+ 0.5*($(window).scrollTop() / $(".parent").height() ) +")");
     });
    
    $(window).scroll(function(){
  $('#topbar').css('left',-$(window).scrollLeft());
});
    
});

function makeNewPosition($container, stat) {

    var h = $container.height()+60;
    var w = $container.width()+60;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    if( stat == 0){
        nw = w-60;
    }
    else if (stat == 1){
        nh = h-60;
    }
    else if (stat == 2){
        nw = -60;
    }
    else if (stat == 3){
        nh = -60;
    }

    return [nh, nw];
    
}

function animateDiv($target, st) {
    
    var newq = makeNewPosition($target.parent(),st);
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $target.animate({
        top: newq[0],
        left: newq[1],
    
    }, speed[0], function() {
        animateDiv($target, (st+1)%4);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.07;

    var dist = x*x + y*y;
    
    var speed = Math.ceil(greatest / speedModifier);

    return [speed,dist];

}