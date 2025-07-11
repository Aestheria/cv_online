/* --------- Tape‑à‑écrire --------- */
function typeWriter(text, el, speed = 100){
  let i = 0;
  const timer = setInterval(()=>{
    if(i <= text.length){
      el.textContent = text.slice(0,i);
      i++;
    }else{
      clearInterval(timer);
      el.style.borderRight = "none";
    }
  }, speed);
}

/* --------- Scroll reveal --------- */
function initScrollReveal(){
  const cards = document.querySelectorAll(".cv-grid section");
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add("visible");}
    });
  },{threshold:0.1});
  cards.forEach(sec=>{
    sec.classList.add("fade-in");
    io.observe(sec);
  });
}

/* --------- Thème --------- */
function initTheme(){
  const btn = document.getElementById("theme-toggle");
  const body = document.body;
  const setIcon = ()=>{btn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";};
  if(window.matchMedia("(prefers-color-scheme: dark)").matches){body.classList.add("dark");}
  setIcon();
  btn.addEventListener("click",()=>{body.classList.toggle("dark");setIcon();});
}

/* --------- Init --------- */
document.addEventListener("DOMContentLoaded",()=>{
  typeWriter("Marine Somsanith", document.getElementById("typewriter"), 90);
  initScrollReveal();
  initTheme();
  console.log("CV chargé avec disposition deux colonnes !");
});


