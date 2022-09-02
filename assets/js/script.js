$(document).ready(function(){

  var current = moment().format("MMM Do, YYYY, h:mm:ss");
  $("#currentDay").text(current);
  
  // Display current time and date
  function updateTime() {
    $('#currentDay').html(moment().format("MMM Do, YYYY, h:mm:ss"));
  }
  setInterval(updateTime, 1000); 
  
  
  //Save button function
  //Stores notes and local Storage data
  $(".saveBtn").on("click", function(){
      var task = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      
      localStorage.setItem(time, task);
  }); 
  
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  
  
  function timeChange(){
      var currentHour = moment().hour(); 
      
      $(".time-block").each(function(){
          var idTime = parseInt($(this).attr("id"));
          if (idTime < currentHour){
              $(this).addClass("past");
          } else if (idTime === currentHour){
              $(this).addClass("present");
              $(this).removeClass("past");
          } else {$(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
          }
      })
  }
  timeChange();
  var timeInterval = setInterval(timeChange, 1000);
});