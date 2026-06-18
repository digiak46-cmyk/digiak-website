const words = ["Brands", "Growth", "Authority", "Revenue"];

let index = 0;

const changingWord = document.getElementById("changing-word");

setInterval(() => {
  index++;

  if (index >= words.length) {
    index = 0;
  }

  changingWord.textContent = words[index];
}, 1200);
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach((item)=>{
    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      item.classList.add("active");
    }
  });
});
