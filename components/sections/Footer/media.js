//================== Render footer media==========================
const renderFooterMediaElement = (mediaLink, mediaClassName) => {
  let footerLinkElement = document.createElement("a");
  let footerIconElement = document.createElement("i");

  //create properties
  footerLinkElement.href = mediaLink;
  footerIconElement.className = mediaClassName;

  // add child to element
  footerLinkElement.appendChild(footerIconElement);

  return footerLinkElement;
};

const renderFooterMediaItems = () => {
  DUMMY_FOOTER_MEDIA.forEach((item) => {
    document.getElementById("mediaIcons")
      .appendChild(renderFooterMediaElement(item.mediaLink, item.mediaClassName));
  });
};

document.getElementById("mediaIcons").onload = renderFooterMediaItems();