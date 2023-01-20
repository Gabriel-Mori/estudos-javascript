const names = ["linus", "adan", "bill"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// enquanto i for menor que o tamanho do array names, será executado o LOOP

for (let i = 0; i < 6; i++) {
  console.log(i);
}

/*
let i armazena 0
i++ incrementa o valor recebido cada vez executado

i começa com 0
1 - 1 É MENOR QUE 5? sim, então na primeira passada i passa a armazenar o valor 1
2 - 2 é menor que 5? sim, então na segunda passada i passa a armazenar o valor 2
3-  3 é menor que 5? sim, então na terceira passada i passa a armazenar o valor 3
4-  4 é menor que 5? sim, então na quarta passada i passa a armazenar o valor 4
5-  5 é menor que 5? não, então na quinta passada i passa a armazenar o valor 5 e para de executar o LOOP

*/
