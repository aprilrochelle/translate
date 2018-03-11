var spanish = {
    merry: "feliz",
    christmas: "navidad",
    and: "y",
    happy: "prospero",
    new: "nuevo",
    year: "ano"
}

var german = {
    merry: "fröhlich",
    christmas: "weihnachten",
    and: "und",
    happy: "glücklich",
    new: "neu",
    year: "jahr"
}

var esperanto = {
    merry: "gaja",
    christmas: "kristnasko",
    and: "kaj",
    happy: "feliĉa",
    new: "nova",
    year: "jaro"
}

var input;
var inputArr = [];
var output;

function gather(inputId) {
    input = document.getElementById(inputId).value;
    inputArr = input.toLowerCase().split(" ");
    return inputArr;
}
var inputArr = gather("input");
function match(array, langObj) {
    for (var i=0; i<array.length; i++) {
        if (array[i] in langObj) {
            // output += '<h3>' + langObj.merry + ' ' + langObj.christmas + ' ' + langObj.and + ' ' + langObj.happy + ' ' + langObj.new + ' ' + langObj.year + '</h3>';
            output = "good job"; // Call translate function
        } else {
            output = "1 or more words not found.";
            break
        }
    }
    return output;
}
console.log(match(inputArr, spanish));