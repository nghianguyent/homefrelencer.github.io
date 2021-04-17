let slideIndex =
  	DUMMY_SLIDE_ITEMS.length - 1; /*prepare for change to the first slide*/
addSlide();
addChangeSlideButton();
showSlideAuto();
function renderContent(innerContent) {
	let content = document.createElement("div");

	content.className = "slide__description";
	content.innerHTML = innerContent;
	return content;
}
function renderImage(item) {
	let image = document.createElement("img");

	image.src = item.image;
	image.alt = item.alt;
	image.height = item.height;
	image.width = item.width;
	return image;
}
function addSlide() {
	let slidesContainer = document.getElementById("slidesContainer");
	DUMMY_SLIDE_ITEMS.forEach((item) => {
		let slide = document.createElement("div");
		let content = renderContent(item.content);
		let image = renderImage(item);
		let description = document.createElement("div");

		slide.className = "slide";
		slide.appendChild(content);
		slide.appendChild(image);
		description.className = "person__description";
		description.innerHTML = item.description;
		slide.appendChild(description);
		slidesContainer.appendChild(slide);
	});
}
function addChangeSlideButton() {
    let index;
    let slideshowContainer = document.getElementById("slideshowContainer");

    for (index = 0; index < DUMMY_SLIDE_ITEMS.length; index++) {
      slideshowContainer.innerHTML += `<span class="dot" onclick="showSlide(${index})"></span> `;
    }
}
function showSlide(index) {
    let i;
    let slidesContainer = document.getElementById("slidesContainer");
    let dots = document.getElementsByClassName("dot");
    let slides = document.getElementsByClassName("slide");

    slidesContainer.style.transform =
      "translateX(" + index * -slides[index].offsetWidth + "px)";
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[index].className += " active";
    slideIndex = index;
}
function showSlideAuto() {
    slideIndex++;
    if (slideIndex == DUMMY_SLIDE_ITEMS.length) slideIndex = 0;
    showSlide(slideIndex);
    setTimeout(showSlideAuto, 5000);
}
