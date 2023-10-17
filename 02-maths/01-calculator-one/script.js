/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let result;

    switch (result) {
        case 1:
            document.getElementById("addition").addEventListener("click", () => {
                // perform an addition
                alert((document.getElementById("op-one")) + (document.getElementById("op-two")))
            });

        case 2:
            document.getElementById("substraction").addEventListener("click", () => {
                // perform an substraction
                alert((document.getElementById("op-one")) - (document.getElementById("op-two")))
            });

        case 3:
            document.getElementById("multiplication").addEventListener("click", () => {
                // perform an multiplication
                alert((document.getElementById("op-one")) * (document.getElementById("op-two")))
            });

        case 4:
            document.getElementById("division").addEventListener("click", () => {
                // perform an division
                alert((document.getElementById("op-one").value) / (document.getElementById("op-two").value))
            });
})();