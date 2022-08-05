document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");
  const dots = document.querySelector(".slider-position-indicator");
  const containerOne = document.querySelector(".product-container-one");
  const containerTwo = document.querySelector(".product-container-two");
  const containerThree = document.querySelector(".product-container-three");
  const One = document.querySelector(".one");
  const Two = document.querySelector(".two");
  const Three = document.querySelector(".three");

  function slideIt(el) {
    if (el.classList.contains("slider-dot")) {
      console.log("clicked on dots", el);
      if (el.classList.contains("one")) {
        containerOne.classList.remove("left");
        containerOne.classList.remove("right");
        containerTwo.classList.add("left");
        containerThree.classList.add("left");
        [...document.getElementsByClassName("slider-dot")].forEach((item) => {
          console.log(item);
          item.classList.remove("dot-active");
        });
        el.classList.add("dot-active");
      }
      if (el.classList.contains("two")) {
        containerTwo.classList.remove("left");
        containerTwo.classList.remove("right");
        containerOne.classList.add("left");
        containerThree.classList.add("left");
        [...document.getElementsByClassName("slider-dot")].forEach((item) => {
          console.log(item);
          item.classList.remove("dot-active");
        });
        el.classList.add("dot-active");
      }
      if (el.classList.contains("three")) {
        containerThree.classList.remove("left");
        containerThree.classList.remove("right");
        containerTwo.classList.add("left");
        containerOne.classList.add("left");
        [...document.getElementsByClassName("slider-dot")].forEach((item) => {
          console.log(item);
          item.classList.remove("dot-active");
        });
        el.classList.add("dot-active");
      }
    }
  }

  // const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  // async function load() {
  //   // We need to wrap the loop into an async function for this to work
  //   for (var i = 0; i < 3; i++) {
  //     console.log(i);
  //     await timer(3000); // then the created Promise can be awaited
  //   }
  // }

  // load();

  let intervalId = window.setInterval(function () {
    let array = [One, Two, Three];
    var interval = 1500; // how much time should the delay between two iterations be (in milliseconds)?
    array.forEach(function (el, index) {
      setTimeout(function () {
        console.log(el);
        slideIt(el);
      }, index * interval);
    });
  }, 6000);

  dots.addEventListener("click", (event) => {
    const el = event.target;
    slideIt(el);
    clearInterval(intervalId);
  });
  // let array = [One, Two, Three];
  // var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
  // array.forEach(function (el, index) {
  //   setTimeout(function () {
  //     console.log(el);
  //     slideIt(el);
  //   }, index * interval);
  // });
});

document.querySelector("#store-link").addEventListener("click", ()=> {
  document.querySelector(".sub-nav").classList.remove("hide");
})
