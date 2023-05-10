import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
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
        ${CardGame("javascript", "Logo do JavaScript")}
      </div>
    </article>
  `;
}

export default CardFrontBack;