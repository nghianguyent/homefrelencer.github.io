const renderNavElement = (linkTo, text, classText) => {
  let navListElement = document.createElement("li");
  let navLinkElement = document.createElement("a");
  let navTextElement = document.createTextNode(text);
  //create properties for list items
  navListElement.className = classText + " menu-item";
  navLinkElement.className = "nav-link";
  navLinkElement.href = linkTo;
  //append child for list
  navLinkElement.appendChild(navTextElement);
  navListElement.appendChild(navLinkElement);

  return navListElement;
};

const renderNavItems = () => {
  DUMMY_NAV_MENU_ITEMS.forEach((item) => {
    document
      .getElementById("navContainer")
      .appendChild(renderNavElement(item.href, item.text, item.class));
  });
};

document.getElementById("navContainer").onload = renderNavItems();

window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("nav-scroll", windowPosition);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".menu-container .menu li");
navLi[0].className += " active";
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.className += " active";
    }
  });
});
