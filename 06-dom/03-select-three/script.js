/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    (function () {
        let x = document.getElementsByClassName("material")[0];
        console.log(x);
        x.getElementsByClassName("target")[0].innerHTML = "owned";
        x.getElementsByClassName("target")[1].innerHTML = "owned";
        x.getElementsByClassName("target")[2].innerHTML = "owned";
        x.getElementsByClassName("target")[3].innerHTML = "owned";
        x.getElementsByClassName("target")[4].innerHTML = "owned";

    })();
