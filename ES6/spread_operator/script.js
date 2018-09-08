let staticLangueges = ['c', 'c++', 'java'];
let dynamicLangueges = ['JavaScript', 'PHP', 'Ruby'];

let langueges = [...staticLangueges, 'C#', ...dynamicLangueges, 'Python'];

console.log(langueges);

function add(x, y, z) {
  console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);