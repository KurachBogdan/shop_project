let productsCountEl = document.getElementById("amount");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".block_add");
console.log(addToCartBtns);

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

let moreDetailsBtns = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target === modal) {
        closeModal();
    }
});

$(".slider-block").slick();
