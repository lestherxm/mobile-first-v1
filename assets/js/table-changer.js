let btnToCommissions = document.getElementById('to-commissions');
let btnToCoins = document.getElementById('to-coins');

let tblCoins = document.getElementById('tbl-coins');
let tblCommissions = document.getElementById('tbl-commissions');

btnToCommissions.addEventListener('click', toggleTables);
btnToCoins.addEventListener('click', toggleTables)

function toggleTables(){
    tblCoins.classList.toggle('hide-element');
    tblCommissions.classList.toggle('hide-element');
    btnToCommissions.classList.toggle('hide-element');
    btnToCoins.classList.toggle('hide-element');
}
