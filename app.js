let productsCountEl = document.getElementById("amount");
let addToCartBtns = document.querySelectorAll(".block_add");

addToCartBtns.forEach((item) =>
    item.addEventListener("click", function () {
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
    if (e.target === modal) {
        closeModal();
    }
});

$(".slider-block").slick({
    autoplay: true,
    autoplaySpeed: 500,
});

let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
        // if(btn.classList.contains(".liked")) {
        //   btn.classList.remove(".liked");
        // } else {
        //   btn.classList.add(".liked");
        // }
        // btn.classList.toggle("liked");
        // this.classList.toggle("liked");
        e.target.classList.toggle("liked");
        e.target.style.transition = "all 2s ease-out";
    })
);

const inrecementBtns = document.querySelectorAll(".increment-btn");
const derecementBtns = document.querySelectorAll(".decrement-btn");
const productsCount = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };

    this.toggleButtonState = function () {
        let count = +this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    };
    this.toggleButtonState();

    this.increment = function() {
      this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
      this.toggleButtonState();
    };

    this.decrement = function() {
      this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
      this.toggleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener(
        "click",
        this.increment.bind(this)
        );

    this.domRefs.decrementBtn.addEventListener(
        "click",
        this.decrement.bind(this)
        );
}
let counters = [];
productsCount.forEach((item, i) =>
    counters[i] = new Counter(inrecementBtns[i], derecementBtns[i], item)
)
// const counter1 = new Counter(inrecementBtns, derecementBtns, productsCount);

