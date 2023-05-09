import './style.css'
import CardGame from './../../components/CardGame';

function BordGame(amountCards){

    const $htmlCardGame = CardGame();//variavel recebendo o conteudo
    const $htmlContent = $htmlCardGame.repeat(amountCards)//propriedade repeat para repeit uma string

    return `
        <section class = "board-game">
            ${$htmlContent}
        </section>
    
    `;
     
}

export default BordGame;