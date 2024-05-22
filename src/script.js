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

