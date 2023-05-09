import CardGame from './../../components/CardGame';

function BordGame(amountCards){

    const $htmlCardGame = CardGame();//variavel recebendo o conteudo
    const $htmlBordGame = $htmlCardGame.repeat(amountCards)//propriedade repeat para repeit uma string

    return $htmlBordGame;
}

export default BordGame;