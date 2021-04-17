const renderHeaderBubbles = (index) => {
  let homeBubbleElement = document.createElement("div");
  //create properties for bubbles
  homeBubbleElement.className = "bubble b" + index;

  return homeBubbleElement;
};

const renderBubbleItems = () => {
  for (let i = 1; i <= 6; i++) {
    document
      .getElementById("bubbleContainer")
      .appendChild(renderHeaderBubbles(i));
  }
};

document.getElementById("bubbleContainer").onload = renderBubbleItems();

const renderHeaderImages = (index) => {
  let homeImageElement = document.createElement("div");
  let homeImageImg = document.createElement("img");
  //create properties for bubbles
  homeImageElement.className = "f-img i" + index;
  homeImageImg.src = "../../../assets/images/header" + index + ".png";
  homeImageImg.alt = "header" + index + ".png";
  //append child for element
  homeImageElement.appendChild(homeImageImg);

  return homeImageElement;
};

const renderHeaderItems = () => {
  for (let i = 1; i <= 9; i++) {
    document
      .getElementById("headerImageContainer")
      .appendChild(renderHeaderImages(i));
  }
};

document.getElementById("headerImageContainer").onload = renderHeaderItems();
