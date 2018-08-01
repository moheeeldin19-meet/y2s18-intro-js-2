// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg''./nirvana-flags-kurt-smily.jpg''./imgs/pinkfloyd.png''./imgs/bonjovi.png''avenged_sevenfold.jpg''./imgs/220px-Linkin_park_hybrid_theory.jpg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;currentIndex<pictures.length ;currentIndex++
  }

  // YOUR TASK: Finish this function!
}
document.getElementsByTagName("img")[0].addEventListener("click",showNextPicture(){
}