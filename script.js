const newEl = document.querySelector(".new");
const subs1El = document.querySelector(".subs1");
const gsst_eEl = document.querySelector(".gsst_e");
const firstEl = document.querySelector(".first");

newEl.addEventListener("click", () => {
  newEl.classList.add("special");
  subs1El.classList.add("special1");
  gsst_eEl.classList.add("gsst_b");
  firstEl.classList.add("first2");
});

subs1El.addEventListener("click", () => {
  newEl.classList.remove("special");
  subs1El.classList.remove("special1");
  gsst_eEl.classList.remove("gsst_b");
});
