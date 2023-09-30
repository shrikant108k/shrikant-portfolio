const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");

[...links].map((link, index) => {
  link.addEventListener("click", () => onLinkClick(link, index), false);
});

const onLinkClick = (link, currentIndex) => {
  const selectedItem = link.getAttribute("name");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  // const currentCard = [...cards].find((card) =>
  //   card.classList.contains(selectedItem)
  // );

  const currentCard = [...cards].find((card) =>
    Object.keys(card.dataset).includes(selectedItem)
  );
  currentCard.classList.add("active");
  highLightSelectedLink(currentIndex);
};

const highLightSelectedLink = (currentIndex) => {
  links.forEach((link) => {
    link.classList.remove("selectedLink");
  });
  links[currentIndex].classList.add("selectedLink");
};


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


// home and about

// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Graphic Designer", "Video Editor", "Gamer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing-2", {
strings: ["Web Developer", "Graphic Designer", "Video Editor", "Gamer", "Freelancer"],
typeSpeed: 100,
backSpeed: 60,

loop: true
});