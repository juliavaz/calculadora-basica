const buttonHistory = document.getElementById("modalhistorico");
const modalHistory = document.querySelector(".transition");

console.log(modalHistory);

function transitionModal() {
  setTimeout(() => {
    modalHistory.classList.add("is-active");
  }, 100);
}

function closeModal() {
  setTimeout(() => {
    modalHistory.classList.remove("is-active");
  }, 100);
}
