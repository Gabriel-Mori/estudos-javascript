const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

popup.addEventListener("click", (e) => {
  const clickedClassElement = e.target.classList[0];
  const classNames = ["popup-close", "popup-wrapper", "popup-link"];
  const souldClosedPopup = classNames.some(
    (item) => item === clickedClassElement
  );

  if (souldClosedPopup) {
    popup.style.display = "none";
  }

  // switch (clickedClassElement) {
  //   case "popup-close":
  //     popup.style.display = "none";
  //     break;
  //   case "popup-wrapper":
  //     popup.style.display = "none";
  //     break;
  //   case "popup-link":
  //     popup.style.display = "none";
  //     break;

  //   default:
  //     break;
  // }

  // const popupCloseX = clickedClassElement === "popup-close";
  // const popupCloseWrapper = clickedClassElement === "popup-wrapper";
  // const popupCloseLink = clickedClassElement === "popup-link";

  // if (popupCloseX) {
  //   popup.style.display = "none";
  // } else if (popupCloseWrapper) {
  //   popup.style.display = "none";
  // } else if (popupCloseLink) {
  //   popup.style.display = "none";
  // }
});
