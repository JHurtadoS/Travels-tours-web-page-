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
  fixPositionTours();
});

const fixPositionTours = () => {
  window.addEventListener("resize", () => {
    const toursSection = document.querySelector(".section-tours");
    const md1 = window.matchMedia("(max-width: 900px)");
    const md2 = window.matchMedia("(max-width: 600px)");
    const cards = toursSection.querySelectorAll(
      ".section-tours__container--row"
    );
    cards.forEach((e, index) => {
      if (md1.matches || md2.matches) {
        if (index % 2 == 0) {
          e.classList.add("card-right");
        } else {
          e.classList.add("card-left");
        }
      } else {
        if (index % 2 == 0) {
          e.classList.remove("card-right");
        } else {
          e.classList.remove("card-left");
        }
      }

      if (md2.matches) {
        e.classList.add("x4");
        e.classList.remove("x8");
        console.log("hey 1");
      } else if (md1.matches) {
        console.log("hey 2");
        e.classList.add("x8");
        e.classList.remove("x4");
      } else {
        e.classList.remove("x4");
        e.classList.remove("x8");
      }
    });
  });
};

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

function disableScroll() {
  window.onscroll = () => {
    window.scroll(0, 0);
  };
}

function enableScroll() {
  window.onscroll = "";
}
