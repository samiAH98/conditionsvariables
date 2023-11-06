const a = 5;
const b = 8;
const c = 5;

if (a === b && b === c && a === c) { console.log('les trois variables sont indentiques') }
else if (a === b || b === c || a === c) { console.log('Deux des variables sont identiques') }
else { console.log('toutes les variables sont différentes') };