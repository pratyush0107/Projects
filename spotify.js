const { createElement } = require("react");

function toggleLang() {
  const box = document.querySelector(".langbox");

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}


 var currentcard=null;
 var currentaudio=null;

 console.log(currentaudio);


function playSong(element) {

  const card = element.closest(".trend-songs") || element;
  const audio1 = card.querySelector("audio");
  const btn = card.querySelector(".playbutton");
  const progress = document.querySelector(".progress");
  currentcard=card;
  currentaudio=audio1;
  console.log(currentaudio);

  songbardisplay(element);

 
  document.querySelectorAll("audio").forEach(audio => {
    if (audio !== audio1) {
      audio.pause();
      audio.currentTime = 0;

      const otherCard = audio.closest(".trend-songs");
      if (otherCard) {
        const otherBtn = otherCard.querySelector(".playbutton");
        if (otherBtn) otherBtn.innerText = "▶";
      }
    }
  });


  if (audio1.paused) {
    audio1.play();
    btn.innerText = "⏸";
  } else {
    audio1.pause();
    btn.innerText = "▶";
  }

  audio1.ontimeupdate = () => {
    if (audio1.duration) {
      const percent = (audio1.currentTime / audio1.duration) * 100;
      progress.style.width = percent + "%";
    }
  };

 
  audio1.onended = () => {
    const nextCard = card.nextElementSibling;

    if (nextCard && nextCard.classList.contains("trend-songs")) {
      playSong(nextCard);
    }
  };
}













function nextsong() {

  if (!currentcard) return;

  const nextCard = currentcard.nextElementSibling;

  if (nextCard && nextCard.classList.contains("trend-songs")) {
    playSong(nextCard);
  }
}
function prevsong() {
  if (!currentcard) return;

  const prevCard = currentcard.previousElementSibling;

  if (prevCard && prevCard.classList.contains("trend-songs")) {
    playSong(prevCard);
  }
}

function songbar() {
console.log(currentaudio);
  if (!currentaudio) return;

  const btn = document.querySelector(".onoff");

  if (currentaudio.paused) {
    currentaudio.play();
    btn.innerText = "⏸";
  } else {
    currentaudio.pause();
    btn.innerText = "▶";
  }
}




function songbardisplay(element) {
    let img = element.querySelector("img");
    let songimg = document.querySelector(".songbar img");
    document.querySelector(".songbar").style.display="flex";
    songimg.src = img.src;
    document.querySelector(".songbar h4").innerText=element.querySelector("h4").innerText;
    document.querySelector(".songbar p").innerText=element.querySelector("p").innerText;
}










const originalcontent =
  document.querySelector(".songs-box").innerHTML;

function showallsongs() {
  document.querySelector(".songs-box").innerHTML = document.querySelector(".hidden-showall-songs").innerHTML;
}

function showallsongsback() {
  document.querySelector(".songs-box").innerHTML = originalcontent;
}
 
 function playsongbar(){
   
    
 }

 
