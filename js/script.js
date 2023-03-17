const ratingContainer = document.querySelector(".rating");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");

ratingBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    let score = event.currentTarget.textContent;

    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();
      ratingContainer.classList.add("thank-you");
      ratingContainer.innerHTML = `
      <div class="thank-you-container">
      <div class="smartphone-img-box">
        <img src="img/illustration-thank-you.svg" alt="smarthphone" />
      </div>
      <div class="rating-score">
        <p class="given-rating-text">
          You selected <span class="score">${score}</span> out of 5
        </p>
      </div>
      <div class="thank-you-heading-box">
        <h1 class="thank-you-heading">Thank you!</h1>
        <p class="thank-you-desc rating-desc">
          We appreciate you taking the time to give a rating. If you ever
          need more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>`;
    });
  });
});
