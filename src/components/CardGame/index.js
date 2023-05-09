import './style.css'
function CardGame(icon = 'alura-pixel', alt = 'logo da alura') {
    return /*html*/`
    <article class="card-game">
        <img src="img/${icon}.png"alt="${alt}">
    </article>

    `
}

export default CardGame;