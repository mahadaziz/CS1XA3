$(document).ready(function(){
    $(".w3-twothird").hide();
    $(".w3-third").hide();
    $("footer").hide();
    $("*").keypress(function(e){
        if (e.which == 13) {
            $(".w3-twothird").fadeIn(3000);
            $(".w3-third").fadeIn(1000);
            $("footer").fadeIn(5000);
        }
    });
    $("#dm").click(function(){
        $("body").removeClass().addClass("w3-black");
        $(".w3-bar").removeClass("w3-black").addClass("w3-light-grey");
        $(".w3-bar-item").removeClass("w3-text-white").addClass("w3-text-black");
    });
    $("#lm").click(function(){
        $("body").removeClass().addClass("w3-light-grey");
        $(".w3-bar").removeClass("w3-light-grey").addClass("w3-black");
        $(".w3-bar-item").removeClass("w3-text-black").addClass("w3-text-white");
    });
    $("#c1").click(function(){
        $(".w3-teal").removeClass("w3-teal").addClass("w3-red");
        $(".w3-text-teal").removeClass("w3-text-teal").addClass("w3-text-red");
        $(".w3-amber").removeClass("w3-amber").addClass("w3-red");
        $(".w3-text-amber").removeClass("w3-text-amber").addClass("w3-text-red");
        $(".w3-cyan").removeClass("w3-cyan").addClass("w3-red");
        $(".w3-text-cyan").removeClass("w3-text-cyan").addClass("w3-text-red");
        $(".w3-blue-grey").removeClass("w3-blue-grey").addClass("w3-red");
        $(".w3-text-blue-grey").removeClass("w3-text-blue-grey").addClass("w3-text-red");
    });
    $("#c2").click(function(){
        $(".w3-teal").removeClass("w3-teal").addClass("w3-amber");
        $(".w3-text-teal").removeClass("w3-text-teal").addClass("w3-text-amber");
        $(".w3-red").removeClass("w3-red").addClass("w3-amber");
        $(".w3-text-red").removeClass("w3-text-red").addClass("w3-text-amber");
        $(".w3-cyan").removeClass("w3-cyan").addClass("w3-amber");
        $(".w3-text-cyan").removeClass("w3-text-cyan").addClass("w3-text-amber");
        $(".w3-amber").removeClass("w3-amber").addClass("w3-amber");
        $(".w3-text-amber").removeClass("w3-text-amber").addClass("w3-text-amber");
    });
    $("#c3").click(function(){
        $(".w3-teal").removeClass("w3-teal").addClass("w3-cyan");
        $(".w3-text-teal").removeClass("w3-text-teal").addClass("w3-text-cyan");
        $(".w3-red").removeClass("w3-red").addClass("w3-cyan");
        $(".w3-text-red").removeClass("w3-text-red").addClass("w3-text-cyan");
        $(".w3-amber").removeClass("w3-amber").addClass("w3-cyan");
        $(".w3-text-amber").removeClass("w3-text-amber").addClass("w3-text-cyan");
        $(".w3-blue-grey").removeClass("w3-blue-grey").addClass("w3-cyan");
        $(".w3-text-blue-grey").removeClass("w3-text-blue-grey").addClass("w3-text-cyan");
    });
    $("#c4").click(function(){
        $(".w3-teal").removeClass("w3-teal").addClass("w3-blue-grey");
        $(".w3-text-teal").removeClass("w3-text-teal").addClass("w3-text-blue-grey");
        $(".w3-red").removeClass("w3-red").addClass("w3-blue-grey");
        $(".w3-text-red").removeClass("w3-text-red").addClass("w3-text-blue-grey");
        $(".w3-amber").removeClass("w3-amber").addClass("w3-blue-grey");
        $(".w3-text-amber").removeClass("w3-text-amber").addClass("w3-text-blue-grey");
        $(".w3-cyan").removeClass("w3-cyan").addClass("w3-blue-grey");
        $(".w3-text-cyan").removeClass("w3-text-cyan").addClass("w3-text-blue-grey");
    });
    $("#c5").click(function(){
        $(".w3-blue-grey").removeClass("w3-blue-grey").addClass("w3-teal");
        $(".w3-text-blue-grey").removeClass("w3-text-blue-grey").addClass("w3-text-teal");
        $(".w3-red").removeClass("w3-red").addClass("w3-teal");
        $(".w3-text-red").removeClass("w3-text-red").addClass("w3-text-teal");
        $(".w3-amber").removeClass("w3-amber").addClass("w3-teal");
        $(".w3-text-amber").removeClass("w3-text-amber").addClass("w3-text-teal");
        $(".w3-cyan").removeClass("w3-cyan").addClass("w3-teal");
        $(".w3-text-cyan").removeClass("w3-text-cyan").addClass("w3-text-teal");
    });
});

var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = `Date: ${mm}/${dd}/${yyyy} Time: ${h}:${m}:${s}`;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}


