/*Comments :

//one line comments

/*      multi-line comment 
                            */

/*Data Types:
    undefined: not defined,
    null : equals to nothing,
    boolean : true or false, 
    string : "something"
    symbol, 
    number,
    object, 

    Example :
        var MyName = "Cursed" --Clasic Variable declaration
        MyName = "16" 

        let MyName = 8 --Onetime variable, data is set to 8 i
    */

/*function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();*/

function setTime_h() {
  const today = new Date();
  let h = today.getHours();
  if (h < 10) {
    h = "0" + h;
  }
  var time_h = h;
  document.getElementById("clock_h").innerText = time_h;
  document.getElementById("clock_h").textContent = time_h;
  setTimeout(setTime_h, 1000);
}

setTime_h();

function setTime_m() {
  const today = new Date();
  let m = today.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  var time_m = m;
  document.getElementById("clock_m").innerText = time_m;
  document.getElementById("clock_m").textContent = time_m;
  setTimeout(setTime_m, 1000);
}

setTime_m();



var videoSource = new Array();
videoSource[0] = "bg_videos/1.mp4";
videoSource[1] = "bg_videos/2.mp4";

var videoCount = videoSource.length;
var i = 1;

$("#video").attr("src", videoSource[0]);
$("#video").on("ended", function (e) {
  if (i == videoCount) {
    i = 0;
  }
  videoPlay(i);
});

function videoPlay(videoNum) {
  i++;
  $("#video").attr("src", videoSource[videoNum]);
}



