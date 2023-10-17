/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let age = prompt("Quel âge as-tu?");
        let sexe = prompt("Quel est ton sexe?");
        let ville = prompt("De quelle ville viens-tu?");
        let confirmation = confirm("Les informations sont-elles correctes: " + age + ", " + sexe + ", " + ville + "?");
    
        function questions() {
            age = prompt("Quel âge as-tu?");
            sexe = prompt("Quel est ton sexe?");
            ville = prompt("De quelle ville viens-tu?");
            confirmation = confirm("Les informations sont-elles correctes: " + age + ", " + sexe + ", " + ville + "?");
    }

    if (confirmation) {
        console.log("saved");
    }
    else {
        questions();
    }
})();