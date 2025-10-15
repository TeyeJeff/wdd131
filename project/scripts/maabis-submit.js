

const storageKey = "pageOpenCount";

let currentCount = parseInt(localStorage.getItem(storageKey)) || 0;

currentCount += 1;

localStorage.setItem(storageKey, currentCount);

const spanElement = document.getElementById("submissionsCount");
if (spanElement) {
    spanElement.textContent = currentCount;
}