function displayTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let currentTime = `${hour}:${minutes}:${seconds}`

  document.getElementById("clock").innerHTML = currentTime;
}
displayTime();
setInterval(displayTime, 1000);