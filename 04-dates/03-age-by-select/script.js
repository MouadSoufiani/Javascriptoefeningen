/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {





    var today = new Date();
    var y = today.getFullYear();
    var d = today.getDay();
    var m = today.getMonth();




    document.getElementById("run").addEventListener("click", function() {
        var day = document.getElementById("dob-day").value;
        var month= document.getElementById("dob-month").value;
        var year= document.getElementById("dob-year").value;

        var age = y - year;


        if (month > m && day > d){
            age = age -1;
        }



    alert(day +  "/" + month +  "/" + year + "\nYour age is " + age );

    });


    // your code here

})();
