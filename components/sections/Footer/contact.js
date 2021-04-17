//================== Responding the form ==========================
const validateInput = (formValues) => {
  return formValues.filter((form) =>
    form.value === "" ? alert(`Please enter your ${form.key}`) : true
  );
};

const respondFormInput = () => {
  let formName = document.getElementById("formInputName").value;
  let formEmail = document.getElementById("formInputEmail").value;
  let formSubject = document.getElementById("formInputSubject").value;
  let formPhone = document.getElementById("formInputPhone").value;
  let formMessage = document.getElementById("formInputMessage").value;
  const tmpFormInputs = [{
      key: "name",
      value: formName
    },
    {
      key: "email",
      value: formEmail
    },
    {
      key: "subject",
      value: formSubject
    },
    {
      key: "phone",
      value: formPhone
    },
    {
      key: "message",
      value: formMessage
    },
  ];
  const checkValidate = validateInput(tmpFormInputs);

  checkValidate.length === tmpFormInputs.length &&
    alert(
      "Your Name: " +
      formName +
      "\nYour Email: " +
      formEmail +
      "\nYour Subject: " +
      formSubject +
      "\nYour Phone: " +
      formPhone +
      "\nYour Massage: " +
      formMessage
    );
};

//================== Render form input ==========================
const renderFooterFormElements = (type, placeholder, identifier) => {
  let footerListElement = document.createElement("li");
  let footerInputElement = document.createElement("input");
  let footerParagraphElement = document.createElement("p");
  // create properties
  footerListElement.className = "form-item";
  footerInputElement.className = "form-input";
  footerInputElement.type = type;
  footerInputElement.id = identifier;
  footerInputElement.placeholder = placeholder;

  // app child for list element
  footerListElement.appendChild(footerInputElement);
  footerListElement.appendChild(footerParagraphElement);
  return footerListElement;
};

const renderFooterFormItems = () => {
  DUMMY_FOOTER_FORM_INPUT.forEach((item) => {
    document
      .getElementById("formInputs")
      .appendChild(
        renderFooterFormElements(item.type, item.placeholder, item.identifier)
      );
  });
};
document.getElementById("formInputs").onload = renderFooterFormItems();

//================== Render contact information==========================
// Render contact container
const renderContactInformation = (headerText, linkTo, linkText) => {
  let footerDivContainerElement = document.createElement("div");
  let footerHeader5Element = document.createElement("h5");
  let footerLinkElement = document.createElement("a");
  //div content element
  footerDivContainerElement.className = "contact-header__information";
  //link element
  footerDivContainerElement.text = headerText;
  footerLinkElement.href = linkTo;
  footerLinkElement.text = linkText;
  //header element
  footerHeader5Element.appendChild(document.createTextNode(headerText));

  //div header for contact
  footerDivContainerElement.appendChild(footerHeader5Element);
  footerDivContainerElement.appendChild(footerLinkElement);

  return footerDivContainerElement;
};
// Render contact information inside container
const renderFooterContactElements = (
  nameText,
  imageLocation,
  alternationText
) => {
  let footerDivContainerElement = document.createElement("div");
  let footerImageElement = document.createElement("img");
  // create properties

  //div container element
  footerDivContainerElement.className = "contact-items";
  footerDivContainerElement.name = nameText;
  //Image element
  footerImageElement.className = "image-contact";
  footerImageElement.src = imageLocation;
  footerImageElement.alt = alternationText;

  // add child to element

  //div container
  footerDivContainerElement.appendChild(footerImageElement);

  return footerDivContainerElement;
};

const renderFooterContactItems = () => {
  DUMMY_FOOTER_CONTACT.forEach((item) => {
    // div container contact
    let footerContactContainer = renderFooterContactElements(
      item.name,
      item.imageLocation,
      item.alternationText
    );
    // div container information
    let footerContactInformation = renderContactInformation(
      item.headerText,
      item.linkTo,
      item.linkText
    );
    //add to layout
    footerContactContainer.appendChild(footerContactInformation);
    document
      .getElementById("contactInformation")
      .appendChild(footerContactContainer);
  });
};

document.getElementById("contactInformation").onload = renderFooterContactItems();