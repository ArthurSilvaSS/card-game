import './style.css'

function PlayerScore (points = 0){
    return /*html*/ `
        <div data-points="${points}" class="playerscore">
            <span class="ponto">um</span>
            <span class="ponto">dois</span>
            <span class="ponto">tres</span>
        </div>
    `; 
}

export default PlayerScore;