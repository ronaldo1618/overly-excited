let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += " " + theWordArray[i] + "!";
        } else if (i === 0) {
            buildMeUp = theWordArray[i]
        } else {
            buildMeUp += " " + theWordArray[i];
        }
        console.log(buildMeUp);
    }
}

addExcitement(sentence);