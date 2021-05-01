var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getTim(){
    var date=new Date();
    var h=check(date.getHours());
    var m=check(date.getMinutes());
    var s=check(date.getSeconds());
    var d=date.getUTCDay();
    document.getElementById(d).style.color = "red";
    var month=check(new Number(date.getUTCMonth()+1));
    var day=check(new Number(date.getUTCDate()));
    document.getElementById("date").innerHTML=date.getUTCFullYear()+"-"+month+"-"+day;
    
    var time=h+":"+m+":"+s;

    document.getElementById("h").innerHTML=h
    +":";
    document.getElementById("m").innerHTML=m+":";
    document.getElementById("s").innerHTML=s;
    t=setTimeout(function(){ getTim()},500);
}
function check(h){
    if(h<10){
        h="0"+h;
    }
    return h;
}
