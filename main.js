import './src/styles/settings/colors.css';
import'./src/styles/generic/reset.css';
import'./src/styles/elements/base.css';
import BoardGame from './src/objects/BordGame'

const $root = document.querySelector("#root");
const $htmlBordGame = BoardGame(6)


$root.insertAdjacentHTML('beforeend', $htmlBordGame) 