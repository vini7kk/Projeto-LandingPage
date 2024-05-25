//Efeito hover no texto
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".text");
    const words = heading.textContent.split(' ').map(word => {
        if (word.trim().toLowerCase() === 'mestre') {
            return `<strong class="hover-word special">${word}</strong>`;
        } else {
            return `<span class="hover-word">${word}</span>`;
        }
    });
    heading.innerHTML = words.join(" ");

    const hoverWords = document.querySelectorAll('.hover-word');
    hoverWords.forEach(word => {
        word.addEventListener('mouseover', () => {
            heading.classList.add('hovering');
        });
        word.addEventListener('mouseout', () => {
            heading.classList.remove('hovering');
        });
    });
});


//Menu Hamburguer JavaScript settings
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    console.log("Botão de hambúrguer clicado");
    
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");

    console.log("Classe 'active' adicionada/removida do menu de navegação e do botão de hambúrguer");
});
