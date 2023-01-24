const paragraph = document.querySelectorAll("p");

paragraph.forEach((element) => {
  const paragraphsError = element.textContent.includes("error");
  const paragraphsSucess = element.textContent.includes("sucess");

  if (paragraphsError) {
    element.classList.add("error");
  }
  if (paragraphsSucess) {
    element.classList.add("sucess");
  }
});
