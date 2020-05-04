// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 20,
//       longitude: 10
//     }
//     callback(data)
//   }, 2000)
// }
// geocode("chicago", (data) => {
//   console.log(data);
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const mul = (num1, num2, callback) => {
  setTimeout(() => {
    const multiplication = num1 * num2
    callback(multiplication)
  }, 2000)
}

mul(3, 4, (sum) => {
  console.log(sum);
})