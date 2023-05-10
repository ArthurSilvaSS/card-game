import ArrowPlayer from "../../components/ArrowPlayer";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from '../../components/VsPlayer';
import './style.css'

function ScoreBoard (){
    return /*html*/`
        <header class="placar">
            <div class="arrow">
                ${ArrowPlayer()}
            </div>
            <div class="score-board">
                ${PlayerName("Player1")}
                ${PlayerScore(2)}
                ${VsPlayer("")}
                ${PlayerScore(2)}
                ${PlayerName("Player2")}
            </div>
        </header>
    
    `;
}

export default ScoreBoard;