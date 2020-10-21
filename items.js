var usr;
var title=[], price=[], code=[], size=[], all=[], image=[], index=0,cnt=0, nm;
var itmsel;
var tot;
var tota=0;
$(document).ready(function() {
    $("#main").css('height',$(window).height()-350);
    $("#nt").click(function(){
        $("#cart").hide(700);
        $("#checkout").show(700);
        $("#main").css('height',400);
    });
    
    $("#bk").click(function(){
        $("#cart").show(700);
        $("#checkout").hide(700);
        $("#main").css('height',285+(cnt*115));
    });
    
    $("#fin").click(function(){
        document.getElementById('loa').style.display = 'block';
        document.getElementById('loa').style.height = '100%';
        $("#loa").animate({opacity:0.6},1);
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var results = this.responseText;
                if(results){
                    
                    usr= checkCookie();
                    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var results = this.responseText;
                document.getElementById('checkout').textContent = '';
                $('#checkout').append ($( "<div style='padding-top:60px;text-align:center;color:gray;font-size:30px;'><div> Your order was successfully placed!</div><div style='font-size:20px;margin-top:20px;'>The order will be reviewed and you will be contacted shortly</div> </div>"));
                
            }
        };
    xmlhttp.open("POST", "don.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + usr);
    
                }
                    
                $("#loa").animate({opacity:0},0.5);
                document.getElementById('loa').style.height = '0px';
                document.getElementById('loa').style.display = 'none';
                  
               // window.location='index.html';
                
            }
        };
    xmlhttp.open("POST", "plc.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var fn = $("#fn").val();
    var ln = $("#ln").val();
    var em = $("#em").val();
    var ad = $("#ad").val();
    var ph = $("#ph").val();
    var ts = "";
    for(var i=0;i<tot;i++){
        if(size[i]!=0){
        ts = ts + "(" + code[i] + ")(" + size[i] + ")*";
        }
    }
    var d = new Date();
    var no = d.getTime();
    xmlhttp.send("no="+ no +"&fn=" + fn + "&ln=" + ln + "&em=" + em + "&ad=" + ad + "&ph=" + ph + "&ts=" + ts);    
    });
    
    
    $(document).on("click", ".rmv", function(){
        itmsel = this.id;
        nm = '#a'+itmsel;

        usr= checkCookie();
        document.getElementById('loa').style.display = 'block';
        document.getElementById('loa').style.height = '100%';
        $("#loa").animate({opacity:0.6},1);
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var results = this.responseText;
                if(results){
                $("#loa").animate({opacity:0},0.5);
                document.getElementById('loa').style.height = '0px';
                document.getElementById('loa').style.display = 'none';
                $(nm).hide(1000);
                var z = $("#main").height();
                z=z-115;
                $("#main").css('height',z);
                cnt=cnt-1;
                size[itmsel]=0;
                tota = tota - parseInt(price[itmsel]);
                document.getElementById('tota').textContent = "Total: L.E. " + tota.toString();
                if(cnt==0){
                    $('#stuff').append ($( "<div style='padding-top:60px;text-align:center;color:gray;font-size:30px;'> Your cart is empty!</div>"));
                    document.getElementById('tota').textContent = "";

                    }
                }
            }
        };
    xmlhttp.open("POST", "rmv.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + usr + "&title=" + title[itmsel] + "&size=" + size[itmsel]);

        
    });
        
    document.getElementById('loa').style.display = 'block';
    document.getElementById('loa').style.height = '100%';
    $("#loa").animate({opacity:0.6},1);
    usr= checkCookie();
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var results = this.responseText;
                var len = results.length;
                var word="";
                index=0;
                for(var i=0;i<len;i++){
                    if(results[i]!=','){
                        word = word + results[i];
                    }
                    else{
                        all[index]=word;
                        index++;
                        word="";
                    }
                }
                cnt=0;
                tota=0;
                document.getElementById('stuff').textContent = '';
                if(index>0){
                    document.getElementById("nt").style.display="block";
                for (var i = 0; i < index; i=i+5) {
                    code[cnt]=all[i];
                    title[cnt]=all[i+1];
                    price[cnt]=all[i+2];
                    size[cnt]=all[i+3];
                    image[cnt]=all[i+4];
                    tota = tota + parseInt(price[cnt]);
                     $("#stuff").append($("<div id='a" + cnt+"' class='ord-1 eff_parent'><div class='ord-2' style='background-image: url(../images/"+image[cnt]+".jpg);'></div><div class='ord-3'>"+title[cnt]+" ("+size[cnt]+")</div><div id='" +cnt+ "' class='rmv ord-4'></div><div class='ord-5'>L.E. "+price[cnt]+"</div></div>"));
                     cnt=cnt+1;
                 }
                    //document.getElementById("gg").textContent=code;
                    document.getElementById('tota').textContent = "Total: L.E. "+ tota.toString();

                }
                else{
                    $('#stuff').append ($( "<div style='padding-top:60px;text-align:center;color:gray;font-size:30px;'> Your cart is empty!</div>"));
                }
                tot=cnt;
                $("#main").css('height',285+(cnt*115));
                
                $("#loa").animate({opacity:0},0.5);
                document.getElementById('loa').style.height = '0px';
                document.getElementById('loa').style.display = 'none';

            }
        };
    xmlhttp.open("POST", "itm.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=" + usr);
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

