import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack(icon, altIcon) {
  window.cardfrontback = {}
  window.cardfrontback.handleclick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    $cardFrontBack.classList.toggle('-active');
  }

  return /*html*/ `
    <article class="card-front-back" onclick="cardfrontback.handleclick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `;
}

export default CardFrontBack;