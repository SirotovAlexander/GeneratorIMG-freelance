// ===================================> RANGE VALUE VALUES

const range = document.getElementById("rangeFor");
const rangeValue = document.querySelector(".rangeValue");

range.addEventListener("input", updateRangeValue);

function updateRangeValue() {
  rangeValue.textContent = range.value;
}
updateRangeValue();

$(document).ready(function () {
  $(".js-example-basic-single").select2();
});
