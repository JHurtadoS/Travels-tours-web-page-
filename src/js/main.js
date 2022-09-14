import "../scss/app.scss";
import ScrollReveal from "scrollreveal";
export default new ScrollReveal();

document.addEventListener("DOMContentLoaded", (e) => {
  let links = document.getElementsByClassName("btn");
  links = Array.from(links);

  links.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  ScrollReveal().reveal(".section-about__row--images__contenedor", {
    delay: 100,
    duration: 1500,
    origin: "right",
    distance: "50px",
  });

  pop_up_show();
});

function pop_up_show() {
  const pop_ups = document.querySelectorAll(".pop-up");
  const cards = document.querySelectorAll(".side--back");
  console.log(cards);
  // console.log(pop_ups);
  // console.log(cards);
  console.log("prueba");
  cards.forEach((e) => {
    const id = e.parentElement.getAttribute("id");
    const button = e.getElementsByClassName("btn");

    button[0].addEventListener("click", (e) => {
      console.log(`pop-up-${id}`);
      const pop_up = document.getElementById(`pop-up-${id}`);
      //console.log(pop_up);
      pop_up.classList.add("open");
      //stopscroll("disable");
      disableScroll();
      document.body.classList.add("stop_scrolling");
    });
  });

  pop_ups.forEach((element, key) => {
    const icons = element.getElementsByClassName("icon-close");
    // console.log(icons);
    icons[0].addEventListener("click", (e) => {
      element.classList.remove("open");
      document.body.classList.remove("stop_scrolling");
      enableScroll();
      //stopscroll("enable");
    });
  });
}
/*
function stopscroll(action) {
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  if (action == "disable") {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    console.log("here1");
  } else if (action == "enable") {
    console.log("here2");
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }
}
*/
function disableScroll() {
  window.onscroll = () => {
    window.scroll(0, 0);
  };
}

function enableScroll() {
  window.onscroll = "";
}
