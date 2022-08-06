function replace(arr, from, to) {
  const replaced = Array.from(arr);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
arr = ["banan", "remon", "momo", "remon"];
result = replace(arr, "banan", "kewi");
console.log(result);

function counter(arr, item) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      count++;
    }
  }
  return count;
}
result = counter(arr, "remon");

console.log(result);

function math(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}

console.log(
  math(["apple", "remon", "melon"], ["banan", "remon", "momo", "apple"])
);
