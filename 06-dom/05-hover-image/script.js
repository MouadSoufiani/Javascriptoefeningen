/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var image = document.getElementsByTagName("img");
    console.log(image);

    var data = image[0] .getAttribute("data-hover");
    console.log(data);

    normal = image[0].src;

    image[0].addEventListener("mouseover", Mouseover);
    image[0].addEventListener("mouseout", Mouseout);

    function Mouseover() {
        image[0].src = data;
    }

    function Mouseout() {
        image[0].src = normal;
    }



})();
