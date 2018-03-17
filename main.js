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

var input = "";
var inputArr = [];
var output = "";

function gather(inputId) {
    input = document.getElementById(inputId).value;
    inputArr = input.toLowerCase().split(" ");
    return inputArr;
}


function match(langObj) {
    for (var i=0; i<inputArr.length; i++) {
        if (inputArr[i] in langObj) {
            output += langObj[inputArr[i]] + ' ';
        } else {
            output = "1 or more words not found.";
            break
        }
    }
    writeToDom(output, 'translation');
}
 
function writeToDom(string, id) {
    document.getElementById(id).innerHTML += string;
}


// Get the parent DIV, add click listener...
document.getElementById("parent-div").addEventListener("click",function(e) {
    var inputArr = gather("input");
	// e.target was the clicked element
  if (e.target && e.target.matches("button#spanish")) {
    match(spanish);
	} else if (e.target && e.target.matches("button#german")) {
        match(german);
    } else {
        match(esperanto);
    }
});
