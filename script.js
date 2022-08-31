function displayTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hour < 10 ? "0" + hour : hour;
  minutes < 10 ? "0" + minutes : minutes;
  seconds < 10 ? "0" + seconds : seconds;


  let currentTime = `${hour}:${minutes}:${seconds}`;

  document.getElementById("clock").innerHTML = currentTime;
}
displayTime();
setInterval(displayTime, 1000);

function displayDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day < 10 ? "0" + day : day;
  month < 10 ? "0" + month : month;
  
  let currentDate = `${day}/${month}/${year}`;

  document.getElementById("date").innerHTML = currentDate;
}

displayDate();
setInterval(displayDate, 1000);