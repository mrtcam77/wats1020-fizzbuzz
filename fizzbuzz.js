// using 'for' loop to declare 'i' as a number
for (i = 1; i <= 20; i++) {
  //   if number is divisible by 3 and 5, then log fizzbuzz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
//   if the number is divisible by 3, log Fizz
  if (i % 3 === 0) {
    console.log("Fizz");
//     if number is divisible by 5 the log Buzz
  } else if (i % 5 === 0) {
    console.log("Buzz");
//     if none of the above conditions are met then log the number
  } else console.log(i);
}
