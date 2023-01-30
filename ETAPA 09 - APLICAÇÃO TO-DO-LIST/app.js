/*
PASSOS PARA ADICIONAR NOVO LI:

PRIMEIRO PASSO: PEGAR A CLASSE DE SUBMIT PARA ADICIONAR O FORM - OK

SEGUNDO PASSO: PEGAR A CLASSE DA UL - OK

TERCEIRO PASSO: CRIAR EVENTO PARA ADICIONAR UMA NOVA "LI" A CADA SUBMIT - OK

QUARTO PASSO: PEGAR VALOR DIGITADO NA INPUT DE ADICIONAR, COM O ID DA INPUT - OK

QUINTO PASSO: CRIAR NOVA "LI" COM VALOR DIGITADO NA INPUT - OK

*/
const addformToDo = document.querySelector(".form-add-todo"); // CLASSE DO FORM DE ADICIONAR
const toDoContainer = document.querySelector(".todos-container"); // CLASSE DA UL
const inputSearch = document.querySelector(".form-search input"); // CLASSE INPUT DO SEARCH

addformToDo.addEventListener("submit", (e) => {
  e.preventDefault(); // evita a pagina ser recarregada a cada submit

  const inputValue = e.target.add.value.trim();
  if (inputValue.length) {
    // sera add uma nova li, se a input tiver algum valor. no caso valor truthy
    toDoContainer.innerHTML += `
     <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    e.target.reset(); // metodo reset: ja tem valor default ''. restaura os valores default de um elemento
  }
  console.log();
});

/*
PASSOS PARA REMOVER  LI:

PRIMEIRO PASSO: PEGAR A CLASSE QUE EXISTE NO ICONE LIXEIRA - OK

SEGUNDO PASSO: VERIFICAR SE CADA LI EXISTE ESSA CLASSE - OK

TERCEIRO PASSO: SE EXISTIR, USAR METODO REMOVE  - OK


*/

toDoContainer.addEventListener("click", (e) => {
  const clickedRemove = e.target;
  const existsClasseDelete = Array.from(clickedRemove.classList).includes(
    "delete"
  );

  if (existsClasseDelete) {
    clickedRemove.parentElement.remove();
  }
});

/*
PASSOS PARA PESQUISAR  LI:

PRIMEIRO PASSO: PEGAR A CLASSE DO INPUT DE SEARCH  - OK

SEGUNDO PASSO: VERIFICAR SE O VALOR DIGITADO NO INPUT DE SEARCH EXISTE NA LI - OK

TERCEIRO PASSO: SE EXISTIR, O VALOR QUE ESTA SENDO PESQUISADO DEIXAR CLASSE DISPLAY: FLEX - OK

QUARTO PASSO: OS QUE NÃO EXISTIRAM CRIAR CLASSE DISPLAY: NONE, PARA QUE SÓ APAREÇA OQUE ESTAMOS PESQUISANDO - OK


*/

inputSearch.addEventListener("input", (e) => {
  const inputValue = e.target.value.trim();

  Array.from(toDoContainer.children)
    .filter((text) => !text.textContent.includes(inputValue))
    .forEach((item) => {
      item.classList.remove("d-flex");
      item.classList.add("hidden");
    });

  Array.from(toDoContainer.children)
    .filter((text) => text.textContent.includes(inputValue))
    .forEach((item) => {
      item.classList.remove("hidden");
      item.classList.add("d-flex");
    });
});
