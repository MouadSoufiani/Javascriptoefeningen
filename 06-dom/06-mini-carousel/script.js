/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    var button = document.getElementById("next");
    var image = document.getElementsByTagName("img")[0];
    var source = image.getAttribute("src");

    var i = 0;
    button.addEventListener("click", function () {

        source = gallery[i];
        image.src=source;

        i++;
        if (i == 5){

            i=0;
        }
    });

    // your code here

})();



