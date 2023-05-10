import './src/styles/settings/colors.css';
import'./src/styles/generic/reset.css';
import'./src/styles/elements/base.css';
import ScoreBoard from './src/objects/ScoreBoard';
import BordGame from './src/objects/BordGame';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${ScoreBoard()}
        ${BordGame(6)}
    `
    ) 