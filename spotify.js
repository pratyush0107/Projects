function toggleLang() {
  const box = document.querySelector(".langbox");

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

function playSong(element) {

  const card = element.closest(".trend-songs") || element;
  const audio = card.querySelector("audio");
  const btn = card.querySelector(".playbutton");

  
  document.querySelectorAll("audio").forEach(a => {
    if (a !== audio) {
      a.pause();
      a.currentTime = 0;

      const otherCard = a.closest(".trend-songs");
      if (otherCard) {
        const otherBtn = otherCard.querySelector(".playbutton");
        if (otherBtn) otherBtn.innerText = "▶";
      }
    }
    
  });

  if (audio.paused) {
    audio.play();
    btn.innerText = "⏸";
  } else {
    audio.pause();
    btn.innerText = "▶";
  }
  
  audio.onended = () => {

    const nextCard = card.nextElementSibling;

    if (nextCard && nextCard.classList.contains("trend-songs")) {

      playSong(nextCard);

    }
};
}

const originalcontent =
  document.querySelector(".songs-box").innerHTML;

function showallsongs() {
  document.querySelector(".songs-box").innerHTML = document.querySelector(".hidden-showall-songs").innerHTML;
}

function showallsongsback() {
  document.querySelector(".songs-box").innerHTML = originalcontent;
}
const body = document.body;

// body.addEventListener("keydown", (e) => {
//     if(e.key.toLowerCase()==="k"){
//       const currentaudio=[...document.querySelectorAll("audio")].find(audio=>!audio.paused);

//      if(currentaudio){
//             currentaudio.pause();
//       }
//       else{
//           const audio = document.querySelector("audio");
//           if (audio) audio.play();
//       }
//     }
// });  