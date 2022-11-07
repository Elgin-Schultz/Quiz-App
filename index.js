/* Bookmark setzen */
const clickOnBookmark = document.querySelector('[data-js="bookmark"]');

const bookmark = document.querySelector('[data-js="bookmark__set"]');

clickOnBookmark.addEventListener("click", () => {
  bookmark.classList.toggle("hidden");
});

const clickOnAnswer = document.querySelector('[data-js="button__answer"]');

const indexCardAnswer = document.querySelector(
  '[data-js="index-card__answer"]'
);

clickOnAnswer.addEventListener("click", () => {
  const indexCardAnswer = document.querySelector(
    '[data-js="index-card__answer"]'
  );
  indexCardAnswer.classList.toggle("hidden");
});
