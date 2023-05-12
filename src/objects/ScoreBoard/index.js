import ArrowPlayer from "../../components/ArrowPlayer";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from '../../components/VsPlayer';
import './style.css'

function ScoreBoard (){
    return /*html*/`
        <header class="score-board">
            ${ArrowPlayer(2)}
            ${PlayerName("Player1")}
            ${PlayerScore(1)}
            ${VsPlayer("")}
            ${PlayerScore(2)}
            ${PlayerName("Player2")}
        </header>
    
    `;
}

export default ScoreBoard;