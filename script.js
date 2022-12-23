const submitButtonn = document.querySelector(".submit-btn");
const ratingButton = document.querySelectorAll(".rating-num");
let rating = 1;
ratingButton.forEach((button) => {
  button.addEventListener("click", function () {
    rating = this.innerHTML;
    console.log(rating);
  });
});
submitButtonn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".conatiner-hidden").style.display = "block";

  document.querySelector(
    ".thankyou"
  ).innerHTML = `You selected ${rating} out of 5`;
});
