export const homeTabLoad = () => {
  console.log("home");
  let tabSpace = document.querySelector(".landingMedia");

  const createElement = ({ how, element, place, whatClass, text }) => {
    const el = document.createElement(element);
    place[how](el);
    el.classList.add(whatClass);
    el.textContent = text;
    return el;
  };

  const landingImage = createElement({
    how: "append",
    place: tabSpace,
    element: "div",
    whatClass: "landingImage",
  });
};
