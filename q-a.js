$(document).ready(function() {
    var h;
    $("#q1").click(function(){
        expand($("#a1"));
    });  
    $("#q2").click(function(){
        expand($("#a2"));
    });  
    $("#q3").click(function(){
        expand($("#a3"));
    });  
    $("#q4").click(function(){
        expand($("#a4"));
    });  
    $("#q5").click(function(){
        expand($("#a5"));
    });  
    $("#q6").click(function(){
        expand($("#a6"));
    });  
    $("#q7").click(function(){
        expand($("#a7"));
    });  
    $("#q8").click(function(){
        expand($("#a8"));
    });
    
    function expand($answer_div){
        if($answer_div.css('display') == 'none'){
            h=$("#main").height()+$answer_div.height();
        }
        else {
            h=$("#main").height()-$answer_div.height();
        }
        $("#main").animate({
        height: h
        });
        $answer_div.toggle(500);
    }
});