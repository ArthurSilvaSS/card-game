import './style.css'

function PlayerScore (points = 0){
    return /*html*/ `
        <div data-points="${points}" class="playerscore">
            <span class="ponto"></span>
            <span class="ponto"></span>
            <span class="ponto"></span>
        </div>
    `; 
}

export default PlayerScore;