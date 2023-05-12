import './style.css'
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data';

function BordGame(amountCards){
    const hideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
    }
    const changePlayer = () =>{
        const $arrowDow = document.querySelector('.arrow-dow');
        const currentplayer = $arrowDow.getAttribute('data-currentplayer');
        $arrowDow.setAttribute('data-currentplayer', currentplayer == 1 ? 2 : 1);
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
        
        if($cardsActive.length === 2){
            setTimeout(() =>{
                hideCards($cardsActive);
                changePlayer();
            }, 1000);
        }
    }
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = $htmlCardsList.join('');

    return /*html*/ `
        <section class = "board-game" onclick="boardGame.handleClick()">
            ${$htmlCards}
        </section>
    `;
}
export default BordGame;