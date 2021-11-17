// alert('Ciaone');

// Consegna: 
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// const difficults = [100, 81, 49];

// console.log(difficults[0]);

let diff = prompt('iserisci livello');
let word;

switch (diff){
    case 'easy':
        diff = 100;
        word = 'easy';
        break;
    case 'hard':
        diff = 81;
        word = 'hard';
        break;
    case 'insane':
        diff = 49;
        word = 'insane';
        break;
    default:
        alert('RICARICARE LA PAGINA E INSERIRE UN LIVELLO VALIDO');
}


let items ='';
for (let i = 0; i < diff; i++){

    items += `
    <div id="cubox-${word}"></div>
    ` 
}
console.log(items);
const easyBox = document.querySelector('.container');
easyBox.innerHTML = items;


