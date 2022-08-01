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
      console.log(pop_up);
      pop_up.classList.add("open");
    });
  });

  pop_ups.forEach((element, key) => {
    const icons = element.getElementsByClassName("icon-close");
    // console.log(icons);
    icons[0].addEventListener("click", (e) => {
      element.classList.remove("open");
    });
  });
}
