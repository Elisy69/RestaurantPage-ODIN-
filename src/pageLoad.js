import Image from "./image.jpeg";

import Image_two from "./image2.jpg";

export const pageInitialLoad = () => {
  console.log("landing page loading...");

  const createElement = ({ how, element, place, whatClass, text }) => {
    const el = document.createElement(element);
    place[how](el);
    el.classList.add(whatClass);
    el.textContent = text;
    return el;
  };
  const content = document.getElementById("content");
  const header = createElement({
    how: "append",
    element: "header",
    place: content,
    whatClass: "content",
    text: "",
  });

  const title = document.createElement("h3");
  title.textContent = "Cozy Restaurant";
  header.append(title);

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  header.append(tabs);

  const buttons = {
    home: {
      class: "btn_home",
      text: "Home",
    },
    menu: {
      class: "btn_menu",
      text: "Menu",
    },
    contact: {
      class: "btn_contact",
      text: "Contact",
    },
  };

  Object.keys(buttons).forEach((btn) => {
    createElement({
      how: "append",
      element: "button",
      place: tabs,
      whatClass: buttons[btn].class,
      text: buttons[btn].text,
    });
  });

  const landingMedia = createElement({
    how: "append",
    place: content,
    element: "div",
    whatClass: "landingMedia",
  });

  const aboutWrapper = createElement({
    how: "append",
    element: "div",
    place: content,
    whatClass: "aboutWrapper",
    text: "",
  });

  const gallery = createElement({
    how: "append",
    element: "div",
    place: aboutWrapper,
    whatClass: "gallery",
    text: "",
  });
  const galleryImage_1 = createElement({
    how: "append",
    element: "div",
    place: gallery,
    whatClass: "galleryImage",
    text: "",
  });

  const about = createElement({
    how: "append",
    element: "div",
    place: aboutWrapper,
    whatClass: "about",
    text: "",
  });

  const aboutTitle = createElement({
    how: "append",
    element: "h3",
    place: about,
    whatClass: "aboutTitle",
    text: "About the Restaurant",
  });

  const aboutText = createElement({
    how: "append",
    element: "div",
    place: about,
    whatClass: "aboutText",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quis ab fuga, tempore nobis mollitia maxime architecto laboriosamillo totam corporis quasi, perferendis accusamus facilis deserunt? Molestiae, nulla unde ",
  });
  const specialTitle = createElement({
    how: "append",
    element: "h3",
    place: about,
    whatClass: "specialTitle",
    text: "Special days:",
  });

  const promo = createElement({
    how: "append",
    element: "div",
    place: about,
    whatClass: "promo",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id mollitia hic atque adipisci labore doloribus? Ut similique debitis, eaque aperiam sint in minus vitae ad ea doloribus laborum excepturi.",
  });

  const footer = createElement({
    how: "append",
    element: "footer",
    place: content,
    whatClass: "footer",
    text: "2023",
  });
  console.log("loaded");
};
