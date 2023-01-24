const error = document.querySelector(".error");
// console.log(error);

// query selector all
const paragraph = document.querySelectorAll("p");
//nodeList posso fazer um forEach

paragraph.forEach((paragraphs) => {
  // console.log(paragraphs);
});

// obter um elemento atraves do ID
const paragraphID = document.getElementById("hello");
console.log(paragraphID);

// obter elementos atraves do nome da classe
const paragraphClass = document.getElementsByClassName("classe");
console.log(paragraphClass[0]);

// obter elementos atraves do nome da tag
const paragraphTags = document.getElementsByTagName("p");
console.log(paragraphTags[3]);
