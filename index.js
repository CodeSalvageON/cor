$("#videoContainer").hide();
$("#ques1").hide();
$("#ques2").hide();
$("#ques3").hide();
$("#ques4").hide();
$("#ques5").hide();
$("#ques6").hide();
$("#ques7").hide();
$("#ques8").hide();
$("#ques9").hide();
$("#ques10").hide();
$("#ques11").hide();
$("#ques12").hide();
$("#ques13").hide();
$("#ques14").hide();
$("#ques15").hide();
$("#ques16").hide();
$("#ques17").hide();
$("#ques18").hide();
$("#ques19").hide();
$("#ques20").hide();

let gd = 0;
let cor = 0;

$("#title-button").click(function () {
  $("#title-screen").toggle("puff");
  $("#ques1").show();
  
  document.getElementById("hell").play();
});

$("#ques1-agree").click(function () {
  cor = cor + 5;
  
  $("#ques1").toggle("puff");
  $("#ques2").show();
});

$("#ques1-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques1").toggle("puff");
  $("#ques2").show();
});

$("#ques1-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques1").toggle("puff");
  $("#ques2").show();
});
