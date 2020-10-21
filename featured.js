var f, id, na;
$(document).ready(function() {

    $("#featured_products").append($("<div id='2' class='pro_eff_parent' style='width:266px; height:320px;border-radius: 10px;float:left;margin-bottom:50px;margin-left:50px;margin-top:50px;'><div id='i-2' class = 'pro_eff_child' style='background-image: url(../images/earrings1.jpg);'></div><div id='t-2' class='pro_title'><b>Paper Flowers - Diamond<br>L.E. 1600</b></div></div>"));
    $("#featured_products").append($("<div id='8' class='pro_eff_parent' style='width:266px; height:320px;border-radius: 10px;float:left;margin-bottom:50px;margin-left:50px;margin-top:50px;'><div id='i-8' class = 'pro_eff_child' style='background-image: url(../images/rings1.jpg);'></div><div id='t-8' class='pro_title'><b>Paloma X - Silver<br>L.E. 395</b></div></div>"));
    $("#featured_products").append($("<div id='22' class='pro_eff_parent' style='width:266px; height:320px;border-radius: 10px;float:left;margin-bottom:50px;margin-left:50px;margin-top:50px;'><div id='i-22' class = 'pro_eff_child' style='background-image: url(../images/bracelet3.jpg);'></div><div id='t-22' class='pro_title'><b>Loving Hearts - Gold<br>L.E. 1400</b></div></div>"));
    
    $(document).on("click", ".pro_eff_parent", function(){
   id = this.id;
    na="t-"+id;
    f = document.getElementById(na).innerHTML;
    var url = document.getElementById("i-"+id).style.backgroundImage;
    var im = url.substring(15, url.length-2);
   document.getElementById('loading').style.display = 'block';
    $("#loading").animate({opacity:0.6},0.7);
   $("body").append("<div id='review' class='view-1 glow'><div id='close' style='cursor:pointer;position:fixed;left:367px;top:13px;width:20px;height:20px;background-image: url(../images/close.png);background-size: cover;background-repeat: no-repeat;'></div><div class='view-2' id='df' style='background-image: url(../images/"+im+");'></div><div class='view-3'>"+f+"</div><div><div class='view-4'><div id='nut' style='float:left;text-align:center;width:67%;'><b>Add to cart</b></div><div class='view-5'>Size<select id='se' class='view-6'><option value='6'>6</option><option value='6.5'>6.5</option><option value='7'>7</option><option value='7.5'>7.5</option><option value='8'>8</option><option value='8.5'>8.5</option><option value='9'>9</option></select></div></div></div></div>");
    });
    
    
    $(document).on("click", "#nut", function(){
    //var id = this.id;
    $(".view-1").css('z-index',3);
    var e = document.getElementById("se");
    var sel = e.options[e.selectedIndex].value;
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var results = this.responseText;
                 //    document.getElementById('gg').textContent = results;
               if(results){      
    document.getElementById("review").remove();
    $("#loading").animate({opacity:0},0.5);
    document.getElementById('loading').style.display = 'none';
        $(".view-1").css('z-index',5);
            }
            }
        };
        var cook = checkCookie();
        var dat = ["","","",""];
        var wh=0;
      //  document.getElementById('gg').textContent = cook;
      for(var i=0;i<f.length;i++){
          if(f[i]!="<"){
              dat[wh]=dat[wh]+f[i];
          }
          else{
              wh=wh+1;
              if(i==0){i=i+2;}
              else {i=i+8;}
          }
      }
    var url = document.getElementById("df").style.backgroundImage;
    var im = url.substring(15, url.length-6);
    xmlhttp.open("POST", "addsh.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + id + "&size=" +sel + "&user=" + cook + "&title=" + dat[1] + "&price=" + dat[2]+ "&img=" + im);
  

    });
    
    $(document).on("click", "#close", function(){
   var id = this.id;
   document.getElementById('loading').style.display = 'block';
    $("#loading").animate({opacity:0.6},0.7);
    document.getElementById("review").remove();
    $("#loading").animate({opacity:0},0.5);
    document.getElementById('loading').style.display = 'none';
    });
    
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("usercj");
    if (user != "") {
        return user;
    }
    else {
        var d = new Date();
        var n = d.getTime();
        setCookie("usercj", n, 365);
        return n;
    }
}