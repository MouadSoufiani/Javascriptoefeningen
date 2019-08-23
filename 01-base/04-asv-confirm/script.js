/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

do {
    var gender = window.prompt("What is your gender?");
    var age = window.prompt("What is your age?");
    var town =window.prompt("Where do you live?");

}

while (
    !window.confirm("Gender? " + gender + "\n" + "Age? " +  age + "\n" + "Town? " +  town )

    );
















})();



