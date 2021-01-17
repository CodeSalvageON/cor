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

$("#cor").hide();
$("#spg").hide();
$("#gd").hide();
$("#ss").hide();

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

$("#ques2-agree").click(function () {
  cor = cor + 5;
  
  $("#ques2").toggle("puff");
  $("#ques3").show();
});

$("#ques2-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques2").toggle("puff");
  $("#ques3").show();
});

$("#ques2-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques2").toggle("puff");
  $("#ques3").show();
});

$("#ques3-agree").click(function () {
  cor = cor + 5;
  
  $("#ques3").toggle("puff");
  $("#ques4").show();
});

$("#ques3-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques3").toggle("puff");
  $("#ques4").show();
});

$("#ques3-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques3").toggle("puff");
  $("#ques4").show();
});

$("#ques4-agree").click(function () {
  cor = cor + 5;
  
  $("#ques4").toggle("puff");
  $("#ques5").show();
});

$("#ques4-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques4").toggle("puff");
  $("#ques5").show();
});

$("#ques4-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques4").toggle("puff");
  $("#ques5").show();
});

$("#ques5-agree").click(function () {
  cor = cor + 5;
  
  $("#ques5").toggle("puff");
  $("#ques6").show();
});

$("#ques5-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques5").toggle("puff");
  $("#ques6").show();
});

$("#ques5-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques5").toggle("puff");
  $("#ques6").show();
});

$("#ques6-agree").click(function () {
  cor = cor + 5;
  
  $("#ques6").toggle("puff");
  $("#ques7").show();
});

$("#ques6-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques6").toggle("puff");
  $("#ques7").show();
});

$("#ques6-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques6").toggle("puff");
  $("#ques7").show();
});

$("#ques7-agree").click(function () {
  cor = cor + 5;
  
  $("#ques7").toggle("puff");
  $("#ques8").show();
});

$("#ques7-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques7").toggle("puff");
  $("#ques8").show();
});

$("#ques7-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques7").toggle("puff");
  $("#ques8").show();
});

$("#ques8-agree").click(function () {
  cor = cor + 5;
  
  $("#ques8").toggle("puff");
  $("#ques9").show();
});

$("#ques8-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques8").toggle("puff");
  $("#ques9").show();
});

$("#ques8-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques8").toggle("puff");
  $("#ques9").show();
});

$("#ques9-agree").click(function () {
  cor = cor + 5;
  
  $("#ques9").toggle("puff");
  $("#ques10").show();
});

$("#ques9-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques9").toggle("puff");
  $("#ques10").show();
});

$("#ques9-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques9").toggle("puff");
  $("#ques10").show();
});

$("#ques10-agree").click(function () {
  cor = cor + 5;
  
  $("#ques10").toggle("puff");
  $("#ques11").show();
});

$("#ques10-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques10").toggle("puff");
  $("#ques11").show();
});

$("#ques10-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques10").toggle("puff");
  $("#ques11").show();
});

$("#ques11-agree").click(function () {
  cor = cor + 5;
  
  $("#ques11").toggle("puff");
  $("#ques12").show();
});

$("#ques11-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques11").toggle("puff");
  $("#ques12").show();
});

$("#ques11-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques11").toggle("puff");
  $("#ques12").show();
});

$("#ques12-agree").click(function () {
  cor = cor + 5;
  
  $("#ques12").toggle("puff");
  $("#ques13").show();
});

$("#ques12-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques12").toggle("puff");
  $("#ques13").show();
});

$("#ques12-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques12").toggle("puff");
  $("#ques13").show();
});

$("#ques13-agree").click(function () {
  cor = cor + 5;
  
  $("#ques13").toggle("puff");
  $("#ques14").show();
});

$("#ques13-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques13").toggle("puff");
  $("#ques14").show();
});

$("#ques13-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques13").toggle("puff");
  $("#ques14").show();
});

$("#ques14-agree").click(function () {
  cor = cor + 5;
  
  $("#ques14").toggle("puff");
  $("#ques15").show();
});

$("#ques14-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques14").toggle("puff");
  $("#ques15").show();
});

$("#ques14-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques14").toggle("puff");
  $("#ques15").show();
});

$("#ques15-agree").click(function () {
  cor = cor + 5;
  
  $("#ques15").toggle("puff");
  $("#ques16").show();
});

$("#ques15-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques15").toggle("puff");
  $("#ques16").show();
});

$("#ques15-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques15").toggle("puff");
  $("#ques16").show();
});

$("#ques16-agree").click(function () {
  cor = cor + 5;
  
  $("#ques16").toggle("puff");
  $("#ques17").show();
});

$("#ques16-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques16").toggle("puff");
  $("#ques17").show();
});

$("#ques16-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques16").toggle("puff");
  $("#ques17").show();
});

$("#ques17-agree").click(function () {
  cor = cor + 5;
  
  $("#ques17").toggle("puff");
  $("#ques18").show();
});

$("#ques17-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques17").toggle("puff");
  $("#ques18").show();
});

$("#ques17-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques17").toggle("puff");
  $("#ques18").show();
});

$("#ques18-agree").click(function () {
  cor = cor + 5;
  
  $("#ques18").toggle("puff");
  $("#ques19").show();
});

$("#ques18-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques18").toggle("puff");
  $("#ques19").show();
});

$("#ques18-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques18").toggle("puff");
  $("#ques19").show();
});

$("#ques19-agree").click(function () {
  cor = cor + 5;
  
  $("#ques19").toggle("puff");
  $("#ques20").show();
});

$("#ques19-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques19").toggle("puff");
  $("#ques20").show();
});

$("#ques19-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques19").toggle("puff");
  $("#ques20").show();
});

$("#ques20-agree").click(function () {
  cor = cor + 5;
  
  $("#ques20").toggle("puff");
  calculate();
});

$("#ques20-unsure").click(function () {
  gd = gd + 2.5;
  cor = cor + 2.5;
  
  $("#ques20").toggle("puff");
  calculate();
});

$("#ques20-disagree").click(function () {
  gd = gd + 5;
  
  $("#ques20").toggle("puff");
  calculate();
});

function calculate () {
  console.log(gd);
  console.log(cor);
  
  if (gd < 60 and gd > 40 and cor < 60 and cor > 40) {
    $("#spg").show();
  }
  
  else if (gd < 40 and cor > 59) {
    $("#cor").show();
  }
  
  else if (gd > 50 and gd < 70) {
    $("#ss").show();
  }
  
  else if (gd > 69) {
    $("#gd").show();
  }
}
