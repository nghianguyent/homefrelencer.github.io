const DUMMY_NAV_MENU_ITEMS = [
  {
    href: "#headerContainer",
    text: "HOME",
    class: "headerContainer",
  },
  {
    href: "#servicesContainer",
    text: "SERVICE",
    class: "servicesContainer",
  },
  {
    href: "#portfolioSection",
    text: "PORTFOLIO",
    class: "portfolioSection",
  },
  {
    href: "#skillContainer",
    text: "SKILL",
    class: "skillContainer",
  },
  {
    href: "#feedbackContainer",
    text: "TESTIMONIAL",
    class: "feedbackContainer",
  },
  {
    href: "#blogsContainer",
    text: "BLOG",
    class: "blogsContainer",
  },
  {
    href: "#contactContainer",
    text: "CONTACT",
    class: "contactContainer",
  },
];
const BOX_ELEMENTS = [
  {
    id: 0,
    class: "top_left_box",
    content: "Design Process",
  },
  {
    id: 1,
    class: "top_right_box",
    content: "UX Thinking",
  },
  {
    id: 2,
    class: "bot_left_box",
    content: "Prototype",
  },
  {
    id: 3,
    class: "bot_right_box",
    content: "Support",
  },
];
const DUMMY_SERVICE_ITEMS = [
  {
    text: "UX & UI Design",
  },
  {
    text: "Mobile & App Design",
  },
  {
    text: "3D Model & Motion",
  },
];
const DUMMY_FOOTER_FORM_INPUT = [
  {
    type: "text",
    placeholder: "Your Name*",
    identifier: "formInputName",
  },
  {
    type: "email",
    placeholder: "Email*",
    identifier: "formInputEmail",
  },
  {
    type: "text",
    placeholder: "Subject*",
    identifier: "formInputSubject",
  },
  {
    type: "number",
    placeholder: "Phone*",
    identifier: "formInputPhone",
  },
];

const DUMMY_FOOTER_CONTACT = [
  {
    name: "phone",
    imageLocation: "./../../../assets/images/phone.png",
    alternationText: "photo-phone",
    headerText: "Call Me Now",
    linkTo: "http://john.wethemez.com/#",
    linkText: "02934567845",
  },
  {
    name: "mess",
    imageLocation: "./../../../assets/images/mess.png",
    alternationText: "photo-mess",
    headerText: "Contact Me",
    linkTo: "http://john.wethemez.com/#",
    linkText: "john@gmail.com",
  },
  {
    name: "location",
    imageLocation: "./../../../assets/images/location.png",
    alternationText: "image-location",
    headerText: "Get Me Here",
    linkTo: "http://john.wethemez.com/#",
    linkText: "Z105 - London, UK",
  },
  {
    name: "headphone",
    imageLocation: "./../../../assets/images/headphone.png",
    alternationText: "photo-headphone",
    headerText: "Listen To Me",
    linkTo: "http://john.wethemez.com/#",
    linkText: "john.com",
  },
];

const DUMMY_FOOTER_MEDIA = [
  {
    mediaLink: "http://www.linkedin.com/",
    mediaClassName: "fa fa-facebook",
  },
  {
    mediaLink: "https://twitter.com/",
    mediaClassName: "fa fa-twitter",
  },
  {
    mediaLink: "https://plus.google.com/",
    mediaClassName: "fa fa-google-plus",
  },
  {
    mediaLink: "https://www.pinterest.com/",
    mediaClassName: "fa fa-pinterest",
  },
];

const DUMMY_PARTNER_ITEMS = [
  {
    image: "./../../../assets/images/icons/folding.png",
    isMiddle: 0,
  },
  {
    image: "./../../../assets/images/icons/asan.png",
  },
  {
    image: "./../../../assets/images/icons/avast.png",
  },
  {
    image: "./../../../assets/images/icons/dsm.png",
  },
  {
    image: "./../../../assets/images/icons/slack.png",
  },
  {
    image: "./../../../assets/images/icons/twitter.png",
  },
  {
    image: "./../../../assets/images/icons/utorrent.png",
  },
];

const SLIDER_ELEMENTS = [
  {
    id: 0,
    src: "../../../assets/images/card_1.jpg",
    title: "Poluchoromatic Logo",
    content: "Branding design",
  },
  {
    id: 1,
    src: "../../../assets/images/card_2.jpg",
    title: "Poluchoromatic Logo",
    content: "Logo design",
  },
  {
    id: 2,
    src: "../../../assets/images/card_3.jpg",
    title: "Creative Design",
    content: "App design",
  },
  {
    id: 3,
    src: "../../../assets/images/card_2.jpg",
    title: "Portfolio",
    content: "UI/UX design",
  },
];

const DUMMY_PARTNER_PROPS_ITEMS = {
  itemSize: "80px",
  itemsDistance: 2,
  radius:
    "calc( 0.5 * (1 + var(--itemsDistance)) * var(--itemSize) / var(--tan))",
};

const BLOG_BOX_ITEMS = [
  {
    link: "http://john.wethemez.com/#",
    title: "Contrary to popular belief",
    content:
      "Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..",
    createDate: "Jan 14",
  },
  {
    link: "http://john.wethemez.com/#",
    title: "Behind the color",
    content:
      "Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..",
    createDate: "Mar 30",
  },
];
const DUMMY_SLIDE_ITEMS = [
  {
    content:
      "Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
    image: "../../../assets/images/AlexSmith.png",
    alt: "Alex Smith",
    height: 76,
    width: 56,
    description: "<pre>Alex Smith\n<span >Evanto Customer</span></pre>",
  },
  {
    content:
      "Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
    image: "../../../assets/images/MichaelBean.jpg",
    alt: "Michael Bean",
    height: 59,
    width: 56,
    description: "<pre>Michael Bean\n<span >Graphic Designer</span></pre>",
  },
  {
    content:
      "Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!",
    image: "../../../assets/images/EdwardEvans.jpg",
    alt: "Edward Evans",
    height: 59,
    width: 56,
    description: "<pre>Edward Evans\n<span >Evanto Customer</span></pre>",
  },
];
