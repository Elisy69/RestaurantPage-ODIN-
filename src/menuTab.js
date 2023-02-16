export const menuTabLoad = () => {
  console.log("Menu");
  let tabSpace = document.querySelector(".landingMedia");

  const createElement = ({ how, element, place, whatClass, text }) => {
    const el = document.createElement(element);
    place[how](el);
    el.classList.add(whatClass);
    el.textContent = text;
    return el;
  };

  const landingMenu = createElement({
    how: "append",
    place: tabSpace,
    element: "div",
    whatClass: "landingMenu",
  });

  const title = createElement({
    how: "append",
    place: landingMenu,
    element: "h2",
    whatClass: "menuTitle",
    text: "Our menu",
  });

  const menuWrapper = createElement({
    how: "append",
    place: landingMenu,
    element: "div",
    whatClass: "menuWrapper",
    text: "",
  });

  const menuItem = createElement({
    how: "append",
    place: menuWrapper,
    element: "div",
    whatClass: "menuItem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel nesciunt consequatur voluptas assumenda quaerat, ea quisquam distinctio, ratione repellendus, praesentium esse tempora. Culpa molestias commodi explicabo cum delectus eveniet minus iusto dolores nisi enim quia facilis, soluta laudantium architecto nam ipsum dolor sapiente nesciunt natus odio harum debitis eos.",
  });
  const menuItem_2 = createElement({
    how: "append",
    place: menuWrapper,
    element: "div",
    whatClass: "menuItem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel nesciunt consequatur voluptas assumenda quaerat, ea quisquam distinctio, ratione repellendus, praesentium esse tempora. Culpa molestias commodi explicabo cum delectus eveniet minus iusto dolores nisi enim quia facilis, soluta laudantium architecto nam ipsum dolor sapiente nesciunt natus odio harum debitis eos.",
  });
  const menuItem_3 = createElement({
    how: "append",
    place: menuWrapper,
    element: "div",
    whatClass: "menuItem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel nesciunt consequatur voluptas assumenda quaerat, ea quisquam distinctio, ratione repellendus, praesentium esse tempora. Culpa molestias commodi explicabo cum delectus eveniet minus iusto dolores nisi enim quia facilis, soluta laudantium architecto nam ipsum dolor sapiente nesciunt natus odio harum debitis eos.",
  });
};
