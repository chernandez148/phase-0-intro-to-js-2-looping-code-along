// Code your solutions in this fil

function writeCards(namesArray, event) {
  let thankYouCards = [];
  for (let i = 0; i < namesArray.length; i++) {
    thankYouCards.push(
      `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}
console.log(writeCards());

function countDown() {
  let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--);
  }
}
console.log(countDown());
