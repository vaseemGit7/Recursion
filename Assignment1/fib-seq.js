//Fibanocci using iteration
const fibs = (n) => {
  let fibArr = [];

  let x = 0;
  let y = 1;
  let z;
  let i = 2;

  fibArr.push(x);
  fibArr.push(y);

  for (i = 2; i < n; i++) {
    z = x + y;
    x = y;
    y = z;

    fibArr.push(z);
  }

  return fibArr;
};

//Fibanocci using recursion
const fibsRec = (n) => {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    const fibArr = fibsRec(n - 1);
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    return fibArr;
  }
};

console.log("Fibanocci using iteration : " + fibs(8));
console.log("Fibanocci using recursion : " + fibsRec(8));
