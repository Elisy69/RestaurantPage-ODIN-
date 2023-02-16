export const contactTabLoad = () => {
  console.log("contact");
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
    whatClass: "landingContact",
  });

  const ourContacts = createElement({
    how: "append",
    place: landingMenu,
    element: "div",
    whatClass: "contactsWrapper",
  });

  const ourContactsTitle = createElement({
    how: "append",
    place: ourContacts,
    element: "h1",
    whatClass: "contactTitle",
    text: "Our contacts:",
  });

  const contactsInfo = createElement({
    how: "append",
    place: ourContacts,
    element: "div",
    whatClass: "contactsInfo",
    text: "+8912393993, First Street, 65, Moscow",
  });
};
