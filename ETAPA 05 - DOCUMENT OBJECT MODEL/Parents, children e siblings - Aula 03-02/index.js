const article = document.querySelector("article");

Array.from(article.children).forEach((item) => {
  item.classList.add("article-children");
});

console.log(article.parentElement.parentElement);
