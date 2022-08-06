let num = 3;
// num 의 숫자가 짝수이면 good 홀수이면 bad

if (num % 2 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

num % 2 === 0 ? console.log("삼항연산식good") : console.log("삼항연산식bad");
