function prime() {
  let num1 = Number(document.getElementById("a").value);
  let num2 = Number(document.getElementById("b").value);
  let str = "Các số nguyên tố cần tìm: ";
  const arr = [];
  let cnt = 0;
  console.log("Primes between a and b: ");
  for (let i = num1; i <= num2; i++){
    if (i == 1 || i == 0){
      continue;
    }
    let check = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        check = 0;
        break;
      }
    }
    if (check == 1) {
      str+=i + " ";
    }
  }
  str+=".";
  document.getElementById("output_prime").innerHTML = str;
}

function numberOneTriangle() {
    let str = "";
    let num = Number(document.getElementById("num").value);
    for (let i = 0; i < num; i++) {
        for(let j = 0; j < i+1; j++) {
            str += "*";
        }
        str += "\n";
    }
    document.getElementById("output_triangle").innerHTML = str;
}