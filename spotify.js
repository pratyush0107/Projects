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
  const audio1 = card.querySelector("audio");
  const btn = card.querySelector(".playbutton");

  
  document.querySelectorAll("audio").forEach(a => {
    if (a !== audio1) {
      a.pause();
      a.currentTime = 0;

      const othercard = a.closest(".trend-songs");
      if (othercard) {
        const otherbtn = othercard.querySelector(".playbutton");
        if (otherbtn) otherbtn.innerText = "▶";
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
  
  audio1.onended = () => {

    const nextcard = card.nextElementSibling;

    if (nextcard && nextcard.classList.contains("trend-songs")) {

      playSong(nextcard);

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