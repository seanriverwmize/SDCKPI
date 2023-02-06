var tpcr = 125;
var contactrate = 5;
var contactconversionrate = 25;
var touchpoints = 50;
var materializationrate = 100;
var scheduledcalls = 5;

document.getElementById("touch-points-slider").oninput = function() {
  changeTouchPoints();
  adjustScheduledCalls();
  adjustMaterializedCalls();
};

document.getElementById("cr-slider").oninput = function() {
  changeContactRate();
  adjustScheduledCalls();
  adjustMaterializedCalls();
};

document.getElementById("ccr-slider").oninput = function() {
  changeContactConversionRate();
  adjustScheduledCalls();
  adjustMaterializedCalls();
};

document.getElementById("mr-slider").oninput = function() {
  changeMaterializationRate();
  adjustMaterializedCalls();
};

function changeTouchPoints() {
  touchpoints = document.getElementById("touch-points-slider").value;
  document.getElementById("touch-points-container").innerHTML = touchpoints;
};

function changeContactRate() {
  contactrate = document.getElementById("cr-slider").value;
  document.getElementById("cr-container").innerHTML = contactrate;
  tpcr = contactrate*contactconversionrate;
};

function changeContactConversionRate() {
  contactconversionrate = document.getElementById("ccr-slider").value;
  document.getElementById("ccr-container").innerHTML = contactconversionrate;
  tpcr = contactrate*contactconversionrate;
};

function changeMaterializationRate() {
  materializationrate = document.getElementById("mr-slider").value;
  document.getElementById("mr-container").innerHTML = materializationrate;
};

function adjustScheduledCalls() {
  scheduledcalls = ((document.getElementById("touch-points-slider").value)*tpcr*0.0001).toFixed(1);
  document.getElementById("scheduled-calls-container").innerHTML = scheduledcalls;
};

function adjustMaterializedCalls() {
  var materializedcalls = (scheduledcalls*materializationrate*.01).toFixed(1);
  document.getElementById("materialized-calls-container").innerHTML = materializedcalls;
}
