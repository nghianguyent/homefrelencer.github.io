const renderServicesElement = (text) => {
  const servicesLiElement = document.createElement('li');
  const servicesLinkElement = document.createElement('a');

  //create properties for list items
  servicesLiElement.className = 'list-items';
  servicesLinkElement.className = 'text-links';
  servicesLinkElement.identifier = 'listItems';
  servicesLinkElement.href = '#picture';
  servicesLinkElement.textContent = text;

  //append child for list
  servicesLiElement.appendChild(servicesLinkElement);

  return servicesLiElement;
};

const renderServicesItems = () => {
  DUMMY_SERVICE_ITEMS.forEach((item) => {
    document.getElementById('listServices')
      .appendChild(renderServicesElement(item.text));
  });
};

document.getElementById('listServices').onload = renderServicesItems();