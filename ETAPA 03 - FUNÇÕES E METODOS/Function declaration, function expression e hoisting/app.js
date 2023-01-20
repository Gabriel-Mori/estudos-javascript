// FUNCTION DECLARATION --> PODE SER CHAMADA QUALQUER LUGAR, NAO PRECISA SER EM EFEITO CASCATA

declaration();

function declaration() {
  console.log("declaration");
}

declaration();

// FUNCTION EXPRESSION --> NÃO É POSSIVEL CHAMAR A FUNÇÃO ANTES DA DECLARAÇÃO DELA

//expression() //Não é possível acessar 'expressão' antes da inicialização;
const expression = function () {
  console.log("expression");
};
expression();
