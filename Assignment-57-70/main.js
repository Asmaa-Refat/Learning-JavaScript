
function showDetails(first, second, third) {
    let firstSentence, secondSentence, thirdSentence;

    typeof first === "string"? firstSentence = `Hello ${first},`: 
    typeof second === "string"? firstSentence = `Hello ${second},`:
    firstSentence = `Hello ${third},`;

    typeof first === "number"? secondSentence = `Your Age Is ${first},`: 
    typeof second === "number"? secondSentence = `Your Age Is ${second},`:
    secondSentence = `Your Age Is ${third},`;

    typeof first === "boolean" && first === true || 
    typeof second === "boolean" && second === true ||
    typeof third === "boolean" && third === true? thirdSentence = `You Are Available For Hire,`: 
    thirdSentence = `You Are Not Available For Hire,`
    
    console.log(`${firstSentence} ${secondSentence} ${thirdSentence}`);
}

showDetails('Asmaa', 22, true)  // Hello Asmaa, Your Age Is 22, You Are Available For Hire
showDetails(22, 'Asmaa', true)  // Hello Asmaa, Your Age Is 22, You Are Available For Hire
showDetails(true, 22, 'Asmaa')  // Hello Asmaa, Your Age Is 22, You Are Available For Hire
showDetails(false, 'Asmaa', 22) // Hello Asmaa, Your Age Is 22, You Are Not Available For Hire

/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */