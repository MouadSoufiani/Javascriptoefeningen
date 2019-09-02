/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var links = document.getElementById("pass-one").value;
        var rechts = document.getElementById("pass-two").value;


        if (links !== rechts) {
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
            console.log("test");


        } else {
            links = document.getElementById("pass-one").style.borderColor = "green";
            rechts = document.getElementById("pass-two").style.borderColor = "green";

        }


    })

    // your code here

})();