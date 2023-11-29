    let btnToCommissions = document.getElementById("to-commissions");
    let btnToCoins = document.getElementById("to-coins");

    let tblCoins = document.getElementById("tbl-coins");
    let tblCommissions = document.getElementById("tbl-commissions");

    btnToCommissions.addEventListener("click", () => {
        /* SHIFT + ALT + A */
        /* Hide tbl Coins */
        tblCommissions.classList.toggle("hide-element");
        btnToCommissions.classList.toggle("hide-element");
        /* Show tbl Commissions */
        tblCoins.classList.toggle("hide-element");
    });
