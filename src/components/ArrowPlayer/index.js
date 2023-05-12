import './style.css';

function ArrowPlayer (currentPlayer = 1, icon = "IconArrowDown", alt = "IconArrow"){
    return /*html*/`
        <img class="arrow-dow"
         data-currentPlayer="${currentPlayer}"
         src="img/${icon}.png" 
         alt="${alt}">
    `;
}

export default ArrowPlayer;