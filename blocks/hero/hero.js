document.querySelector(":scope h1")

export default function decorate(block) {
    const myHeroCard = document.querySelector(":scope h1")
    block.classList.add('herocard-welcome-header-background');
}