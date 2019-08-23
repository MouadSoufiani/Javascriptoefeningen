/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var total = (hours * 60) + 30;
    total = 1070;

    console.log(hours);

    if (total<1050){
        document.getElementById("target").innerHTML = "Hello!";

    }
    else {
        document.getElementById("target").innerHTML = "Good evening!";

    }




    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
