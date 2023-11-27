// console.log('Hello world !')
const payRateUSD = 80;
const hours = 5 * (11 - 2);
const workHours = 40;
console.log('Смогу ли я работать? ' + (hours > workHours));
console.log('Сколько я заработаю? ' + (workHours * payRateUSD) + ' USD');