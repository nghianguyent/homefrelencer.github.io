const sliderCardWidth = 370 / 16; // = 23.125 rem

const renderElementImage = (item) => {
  let elementImage = document.createElement("img");
  
  elementImage.className = "slider-elements__image";
  elementImage.setAttribute("src", item.src);
  elementImage.setAttribute("alt", "Portfolio " + (item.id + 1));

  return elementImage;
}

const renderElementTitle = (item) => {
  let titleLink = document.createElement("a");
  let elementTitle = document.createElement("h4");

  elementTitle.className = "slider-elements__title";
  elementTitle.textContent = item.title;
  
  titleLink.setAttribute("href", "#");
  titleLink.appendChild(elementTitle);

  return titleLink;
}

const renderElementContent = (item) => {
  let contentLink = document.createElement("a");
  let elementContent = document.createElement("p");
  
  elementContent.className = "slider-elements__content";
  elementContent.textContent = item.content;
  contentLink.setAttribute("href", "#");
  contentLink.appendChild(elementContent);

  return contentLink;
}

const renderSliderElement = (item) => {
  let sliderElement = document.createElement("div");
  
  sliderElement.className = "slider-elements";

  sliderElement.appendChild(renderElementImage(item));
  sliderElement.appendChild(renderElementTitle(item));
  sliderElement.appendChild(renderElementContent(item));

  return sliderElement;
};

const renderSlider = () => {
  // Render two times to fill the slider completely
  for (let count = 0; count < 2; count++)
    SLIDER_ELEMENTS.forEach((item) => {
      document
        .getElementById("sliderSlides")
        .appendChild(renderSliderElement(item));
    });
};

const createDotElement = (index) => {
  let dot = document.createElement("div");

  dot.className = `dot ${index == 0 ? "active" : ""}`;
  dot.onclick = function() {showSlide(index)};

  return dot;
};

const renderDot = () => {
  for (let index = 0; index < SLIDER_ELEMENTS.length; index++)
    document.getElementById("dots").appendChild(createDotElement(index));
};

function showSlide(index) {
  let staticIndex;

  sliderSlides.style.transform = "translateX(-" + (index * sliderCardWidth) + "rem)";
  for (staticIndex = 0; staticIndex < sliderDots.length; staticIndex++) {
    if (sliderDots[staticIndex].className == "dot active")
      sliderDots[staticIndex].className = sliderDots[staticIndex].className.replace(" active", "");
  }

  // Set dot-active class for dot when it is clicked
  sliderDots[index].className = `dot active`;
  slideIndex = index;
}

function showSlideAutomatically() {
  if (slideIndex == SLIDER_ELEMENTS.length) slideIndex = 0;
  showSlide(slideIndex);
  slideIndex++;
  setTimeout(showSlideAutomatically, 5000);
}

let slideIndex = 0;
let sliderSlides = document.getElementById("sliderSlides");
sliderSlides.onload = renderSlider();
document.getElementById("dots").onload = renderDot();
let sliderDots = document.getElementsByClassName("dot");

showSlideAutomatically();
