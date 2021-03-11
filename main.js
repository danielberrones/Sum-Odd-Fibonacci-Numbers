function sumFibs(num) {
  let arr = [];
  let arr2 = [];
  let num1 = 1;
  let num2 = 1;
  let sum = num1 + num2;
  let temp;

  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    arr.push(num1,num2);
    for (let i = 0; i <= num; i++) {
      temp = sum;
      arr.push(sum);
      sum = sum + num2;
      num2 = temp;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr2.push(arr[i]);
    }
  }

let result = arr2.filter(x=>x<=num);
return result.reduce((a,b)=>a+b);

}

