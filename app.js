const today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

/* function setTime(){
 

  document.getElementById("time").innerHTML = ;
  
} */

/* function display_setTime(){

  var refresh=1000;
  mytime= setTimeout('setTime()', refresh);
} */

function setGreetings(){
      var prepand = (hour >= 12)? " PM ":" AM ";
      var greet = (hour >= 12 && hour < 18)? "Good day" : "Good morning";
      var greet = (hour >= 18 )? "Good evening" : "Good day";
      var greetPartTwo = (hour >= 12 )? "What is your plan for the day?" : "What is your plan for the evening";
      hour = (hour >= 12)? hour - 12: hour;
      if (hour===0 && prepand===' PM ') 
      { 
        if (minute===0 && second===0)
      { 
        hour=12;
        prepand=' Noon';
      } else{ 
        hour=12;
        prepand=' PM';
      } 
      } if (hour===0 && prepand===' AM ') 
        { 
        if (minute===0 && second===0){ 
            hour=12;
            prepand=' Midnight';
        } else{ 
            hour=12;
            prepand=' AM';
        } 
      }
      if(minute < 10)
      {
          minute = "0" + minute
      }
      if(second < 10)
      {
          second = "0" + second
      }
      document.getElementById("time").innerHTML = hour +":"+ minute +":" + second + prepand;
      document.getElementById("greeting").innerHTML = greet;
      document.getElementById("greeting-part-two").innerHTML = greetPartTwo;
      
    }

    function changeImage(){
        var i = 0;
        var images = [];
        images[0] = "url('images/to_12.png')";
        images[1] = "url('images/after_12.png')";
        images[2] = "url('images/after_18.png')";

        var el = document.body;
        

        if(hour < 12){
            el.style.backgroundImage = images[0];
        } else if(hour >= 12 && hour < 18){
            el.style.backgroundImage = images[1];
        } else {
            el.style.backgroundImage = images[2];
        }
        

    }

    function setTextColor(){

      if(hour < 12){
        document.getElementById("body").style.color = "#21130d";
    } else if(hour >= 12 && hour < 18){
      document.getElementById("body").style.color = "#21130d";
    } else {
      document.getElementById("body").style.color = "#e2e4df";
    }
    }
    //setTime();
   // display_setTime();
    setGreetings();
    setTextColor();
    changeImage();
    //setGreetings();


