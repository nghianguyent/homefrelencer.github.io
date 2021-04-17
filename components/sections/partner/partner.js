document.getElementById("partnerItems").style.setProperty("--tan", Math.tan(Math.PI / 6));
let middleItems = 1;
// create list item 
const renderPartnerElement = (images, index) => {
    let partnerLinkElement = document.createElement('a');
    let partnerImageElement = document.createElement('img');
    // create properties for list itemsS
    partnerLinkElement.href = "#";
    partnerLinkElement.className = "list-items";
    partnerImageElement.src = images;
    partnerImageElement.alt = "client items";
    // set value for calculating circle items
    if (middleItems < index + 1) {
        partnerLinkElement.style.setProperty("--index", index); // the index of the item on the circle
    }
    partnerLinkElement.style.setProperty("--angleRotate", "calc(var(--index) * 1turn / 6 + 90deg)");
    
    //add child for list items
    partnerLinkElement.appendChild(partnerImageElement);
    return partnerLinkElement;
};
// render all items
let partnerListItems = document.getElementById("partnerItems");
const renderPartnerItems = () => {
    
    DUMMY_PARTNER_ITEMS.forEach((item, index) => {
        partnerListItems.appendChild(renderPartnerElement(item.image, index));
    });
};
partnerListItems.onload = renderPartnerItems();
// calculate the position on the circle 
const makeCircleItems = () => {
    let partnerListItems = document.getElementById("partnerItems");
    for (const [key, value] of Object.entries(DUMMY_PARTNER_PROPS_ITEMS)){
        partnerListItems.style.setProperty("--" + key, value);
    }
}

partnerListItems.onload = makeCircleItems();