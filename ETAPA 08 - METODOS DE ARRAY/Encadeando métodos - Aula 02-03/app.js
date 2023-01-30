const books = [
  { name: "Código Limpo", price: 30 },
  { name: "O milagre da manhã", price: 5 },
  { name: "Alice no País das Maravilhas", price: 10 },
  { name: "Quem Pensa Enriquece", price: 50 },
  { name: "O livro da ciência", price: 40 },
];

const filteredBooks = books
  .filter((book) => book.price > 20)
  .map(
    (book) => `o preço do livro "${book.name}" caiu para ${book.price} reais`
  );
