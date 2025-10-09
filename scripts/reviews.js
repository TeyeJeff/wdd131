// Function to increment and display review count
function updateReviewCounter() {
  // Get existing count or start from 0
  let count = localStorage.getItem("reviewCount");

  if (!count) {
    count = 0;
  } else {
    count = parseInt(count);
  }

  // Increment count by 1
  count += 1;

  // Store updated count
  localStorage.setItem("reviewCount", count);

  // Display count on the page
  const reviewCountElement = document.getElementById("reviewCount");
  if (reviewCountElement) {
    reviewCountElement.textContent = count;
  }
}

// Function to set footer year
function updateFooterYear() {
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  updateReviewCounter();
  updateFooterYear();
});
