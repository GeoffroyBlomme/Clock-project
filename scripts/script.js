let setupListeners = function(){
  let selects = document.getElementsByClassName("selectTime");
  for(let i = 0; i < selects.length ; i++){
      selects[i].addEventListener("change",updateImage);
  }
}

let setupDefault = function(){
  theOptions();
  selectDefault();
  showCurrentTime();
  updateImage();
  setInterval(showCurrentTime,1000);
}

let setup = function(){
  setupDefault();
  setupListeners();
}

window.addEventListener("load",setup);

let showCurrentTime = function(){
  let clock = document.getElementById("clock");
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if(minutes<10){
    minutes = "0" + minutes;
  }
  let seconds = currentTime.getSeconds();
  if(seconds<10){
    seconds = "0" + seconds;
  }
  let am = (hours<=12);
  let text;
  if(am){
    text = hours + ":" + minutes +":" +  seconds + " AM";
  }
  else{
    text = (hours-12) + ":" + minutes +":" + seconds + " PM";
  }
  clock.innerHTML = text;
}
/* theOptions : adds 24 options in each select, with each one representing
an hour of the day, their values going from 1 to 24.
*/
let theOptions = function(){
  let selects = document.getElementsByTagName("select");
  for(let i = 0;i < selects.length ; i++){
    for(let t = 1; t < 11; t++){
      let value = document.createElement("option");
      value.setAttribute("value",t);
      value.innerHTML = t + " AM - " + (t+1) + "AM";
      selects[i].innerHTML += value.outerHTML;
    }
    let value = document.createElement("option");
    value.setAttribute("value",11);
    value.innerHTML = "11 AM - 12 PM";
    selects[i].innerHTML += value.outerHTML;
    value.setAttribute("value",12);
    value.innerHTML = "12 PM - 1 PM";
    selects[i].innerHTML += value.outerHTML;
  for(let t = 1; t<11;t++){
    let value = document.createElement("option");
    value.setAttribute("value",12+t);
    value.innerHTML = t + " PM - " + (t+1) + "PM";
    selects[i].innerHTML += value.outerHTML;
  }
  value = document.createElement("option");
  value.setAttribute("value",23);
  value.innerHTML = "11 PM - 12 AM";
  selects[i].innerHTML += value.outerHTML;
  value.setAttribute("value",24);
  value.innerHTML = "12 AM - 1 AM";
  selects[i].innerHTML += value.outerHTML;
}
}

let selectDefault = function(){
  let teaTime = document.getElementById("teaTime");
  let hamburgerTime = document.getElementById("hamburgerTime");
  let chillingTime = document.getElementById("chillingTime");
  teaTime[15].selected = true;
  hamburgerTime[11].selected = true;
  chillingTime[19].selected= true;
}

/* updateImage : updates the image based on the current time and the selected times.
*/
let updateImage = function(){
  let currentTime = new Date();
  let img = document.getElementById("mainImg");
  let hours = currentTime.getHours();
  if(hours == 0){
    hours=24;
  }
  let teaTime = document.getElementById("teaTime").value;
  let hamburgerTime = document.getElementById("hamburgerTime").value;
  let chillingTime = document.getElementById("chillingTime").value;
  if(teaTime == hours){
    img.src = "images/tea.jpg";
  }
  else if(hamburgerTime == hours){
    img.src = "images/eating.jpg";
  }
  else if(chillingTime == hours){
    img.src = "images/chilling.gif";
  }
  }

