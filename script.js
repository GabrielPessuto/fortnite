// ===========================
// FNCS FRIENDS INVITATIONAL
// script.js
// ===========================

// Revela elementos ao rolar

const revealElements = document.querySelectorAll(".card, .stat, .champion");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

revealElements.forEach(el => observer.observe(el));

// ===========================
// Glow nos cards
// ===========================

tsParticles.load("tsparticles", {
  particles: {
    number: { value: 45, density: { enable: true, area: 800 } },
    color: { value: ["#a855f7", "#00c3ff", "#ffffff"] },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: { min: 1, max: 3 } },
    move: { enable: true, speed: 2, outModes: { default: "out" } },
    links: { enable: true, distance: 120, color: "#7c3aed", opacity: 0.4 }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } }
  }
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(0,212,255,.25),
        rgba(255,255,255,.04) 45%)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

// ===========================
// Botão com efeito de clique
// ===========================

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    btn.style.transform = "scale(.95)";

    setTimeout(() => {

        btn.style.transform = "";

    },150);

});

// ===========================
// Navbar muda ao scroll
// ===========================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.background="rgba(5,5,20,.92)";
        nav.style.boxShadow="0 10px 40px rgba(0,0,0,.5)";

    }else{

        nav.style.background="rgba(10,10,25,.55)";
        nav.style.boxShadow="none";

    }

});

// ===========================
// Efeito de digitação
// ===========================

const title = document.querySelector(".hero h1");

const original = title.innerText;

title.innerHTML = "";

let i = 0;

function typing(){

    if(i < original.length){

        title.innerHTML += original.charAt(i);

        i++;

        setTimeout(typing,40);

    }

}

window.onload = typing;

// ===========================
// Partículas simples
// ===========================

const bg = document.querySelector(".background");

for(let i=0;i<35;i++){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random()*100+"vw";
    particle.style.top = Math.random()*100+"vh";

    particle.style.animationDuration =
    (5+Math.random()*8)+"s";

    particle.style.animationDelay =
    Math.random()*5+"s";

    bg.appendChild(particle);

}

// ===========================
// Mensagem do campeão
// ===========================

const champion = document.querySelector(".gold");

champion.addEventListener("click",()=>{

    alert("🏆 editionBAGACEIRO domina o High Ground e continua sendo o campeão absoluto da FNCS Friends!");

});

// ===========================
// Hover sonoro (preparado)
// ===========================

// Para usar:
// coloque um arquivo chamado hover.mp3
// na mesma pasta do projeto.

const audio = new Audio("hover.mp3");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        audio.currentTime=0;

        // Descomente para ativar
        // audio.play();

    });

});

// ===========================
// Cursor Neon
// ===========================

const cursor = document.createElement("div");

cursor.id="cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// ===========================
// Efeito de entrada
// ===========================

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},100);