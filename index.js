$("#videoContainer").hide();
$("#ques1").hide();

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
