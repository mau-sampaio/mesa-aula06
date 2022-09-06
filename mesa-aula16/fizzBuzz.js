let FizzBuzz = (num1, num2) => {
  for (let i = 1; i <= 100; i++) {
    //console.log(i);
    if (i%num1 == 0 && i%num2 == 0) {
      console.log("FizzBuzz");
    } else if (i % num2 == 0) {
      console.log("Buzz");
    } else if (i % num1 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

FizzBuzz(2,3);
