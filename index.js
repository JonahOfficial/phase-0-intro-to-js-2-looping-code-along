function writeCards(stringNamesArray, eventName) {
    let thankYouCards=[]
    for (let i=0; i<stringNamesArray.length; i++) {
        thankYouCards.push(`Thank you, ${stringNamesArray[i]}, for the wonderful surprise gift!`)
    }
    return thankYouCards
}
writeCards(["Guadalupe", "Ollie", "Aki"])

function countDown(firstNumber) {
    while (firstNumber>0) {
        console.log(firstNumber)
        firstNumber -=1
    }
    console.log(firstNumber)
}