const timers = process.argv.splice(2);
// const playsound = () => process.stdout.write('\x07');
const playsound = () => process.stdout.write('a\n'); // my system is Windows and it is not producing the sound, hence substituded for a letter.
// playsound();
for(timer of timers.map((timerStr) => Number(timerStr))) {
  if(timer >= 0 && timer !== NaN){
    // console.log("hey")
    setTimeout(() => playsound() , timer * 1000);
  }
}
// console.log(timers);
