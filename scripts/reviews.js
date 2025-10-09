
function updateReviewCounter() {
  let count = localStorage.getItem("reviewCount");

  if (!count) {
    count = 0;
  } else {
    count = parseInt(count);
  }

  count += 1;

  localStorage.setItem("reviewCount", count);

  const reviewCountElement = document.getElementById("reviewCount");
  if (reviewCountElement) {
    reviewCountElement.textContent = count;
  }
}

function updateFooterYear() {
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateReviewCounter();
  updateFooterYear();
});
