const clockConatiner = document.querySelector(".clock-container");

const updateClock = () => {
  const pressent = new Date();
  const hours = pressent.getHours();
  const minutes = pressent.getMinutes();
  const seccond = pressent.getSeconds();
  // console.log(pressent);

  const clockHtml = `
  <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
  <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
  <span>${String(seccond).length === 1 ? `0${seccond}` : seccond}</span>
  `;

  clockConatiner.innerHTML = clockHtml;
};
setInterval(updateClock, 1000);
