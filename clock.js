const clock = document.querySelector(".js-clock .clock_text");
function getTime(){
  const now = =new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = '${hours} : ${minutes} : {$seconds}';
  clock.innerHTML = time;
  console.log(hours, time);
  return;
}
function init(){
  getTime();
  setInterval(getTime, 1000);
  return;
}
init();
