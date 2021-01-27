
$(document).ready(function(){

  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
});

function buttonClick() {
let a = parseInt($("#pointsa").text());
let b = parseInt($("#pointsb").text());
let sublevel = $("#level").text();
let fruit = parseInt($("#fruit").text());
let level = parseInt(sublevel.replace('Level ', ''));

if(a + 1 >= parseInt(b)) {
  $("#level").text("Level " + (level + 1));
  $("#fruit").text(fruit + 1);
  $("#pointsa").text(0);
  $("#pointsb").text(b * 2)
} else {
  $("#pointsa").text(a + 1);
  $("#points").text("changed");
}
}

  function startTimer() {
    setInterval(function(){
      let newNum = parseInt($("#tickerOne").text()) - 1;
      let tools = parseInt($("#tools").text());
      $("#tickerOne").text(newNum);
      if (newNum <= 0) {
        let subtickerLvl = $("#tickerLvl").text();
        let tickerLvl = parseInt(subtickerLvl.replace('Level ', ''))
        $("#tickerOne").text(300);
        $("#tickerLvl").text(tickerLvl + 1);
        $("#tools").text(tools + 1);
      }
    }, 1000);

}

function clickerPower() {
  let cpow = parseInt($("#clickerPowerLvl").text().replace('Level ', ''));
  let fruit = parseInt($('#fruit').text());
  let tools = parseInt($("#tools").text());
  let level = $("#clickerPowerLvl").text();
  if (fruit >= 3) {
    $("#clickerPowerLvl").text("Cost: 2 Hammers");
    let afterPowerClick = parseInt($("#pointsa").text()) + 10;
    $("#pointsa").text(afterPowerClick);
    $("#clickerPower").text("When you have two hammers, click here to beat the game!");
    $('#fruit').text(fruit - 3);
  }
  if (tools >= 2 && level === "Cost: 2 Hammers") {
    console.log(level);
    $("#clickerPowerLvl").text("Done");
    $("#clickerPower").text("Congratulations, you beat the game!");
    $('#tools').text(tools - 2);
  }
}
