const btn = document.querySelector(".buttonGen");
const credits = document.querySelector(".numberOfCredits");

btn.addEventListener("click", onClick);

function onClick(event) {
  const creditsQuantity = Number(credits.textContent);
  if (creditsQuantity === 0) {
    alert("You have not any credits....Try Late");
    return;
  }
  credits.textContent = creditsQuantity - 1;
  alert("There is you Generated images");
}
