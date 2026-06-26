function smena(){
      const arr = ["img/2src.webp", "img/i.webp"];
      const img = document.getElementById("imgs");
      if (i<1){
            img.src = arr[i];
            i++;
      }
      else{
            img.src="img/i.webp";
            i=0;
      }
}
const dialog = document.querySelector('dialog');
document.querySelector('#open').onclick = () => dialog.showModal();
document.querySelector('#close').onclick = () => dialog.close();
const otvet = document.getElementById("ot");

function ot() {
const otvet = document.getElementById("otpr");
otvet.innerHTML = "Отправка...";
setTimeout(function() {
      otvet.innerHTML = "Отправлено";
      otvet.blur();
    }, 500);
}
function to() {
const otvet = document.getElementById("ot");
otvet.innerHTML = "Отправка...";
}

function to() {
    setTimeout(function() {
      const container = document.getElementById("ot");
      container.innerHTML = "Отправлено";
      container.blur();
    }, 500);
    setTimeout(function() {
      const container = document.getElementById("ot");
      container.innerHTML = "Отправить";
      container.blur();
    }, 2000);
  }
let i = 0;



function countsofa() {
      const arr = ["img/sofa2.webp", "img/sofa3.webp", "img/sofa1.webp"];
      const img = document.getElementById("shkaf");
      if (i<2){
            img.src = arr[i];
            i++;
      }
      else{
            img.src="img/sofa1.webp";
            i=0;
      }
}

function countshkaf() {
      const arr = ["img/shkaf2.webp", "img/shkaf3.jpg", "img/shkaf1.webp"];
      const img = document.getElementById("shkaf");
      if (i<2){
            img.src = arr[i];
            i++;
      }
      else{
            img.src="img/shkaf1.webp";
            i=0;
      }
}

function countbed() {
      const arr = ["img/bed2.webp", "img/bed3.webp", "img/bed1.webp"];
      const img = document.getElementById("shkaf");
      if (i<2){
            img.src = arr[i];
            i++;
      }
      else{
            img.src="img/bed1.webp";
            i=0;
      }
}


function countchair() {
      const arr = ["img/chair2.webp", "img/chair3.webp", "img/chair1.webp"];
      const img = document.getElementById("shkaf");
      if (i<2){
            img.src = arr[i];
            i++;
      }
      else{
            img.src="img/chair1.webp";
            i=0;
      }
}


