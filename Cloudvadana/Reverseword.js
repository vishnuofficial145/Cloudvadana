function reverseWordsInSentence() {
    let sentence = prompt("Enter A sentence:");
    let words = sentence.split(" ");
    let reversedWords = words.map(word => word.split("").reverse().join(""));
    let reversedSentence = reversedWords.join(" ");
    console.log('Original Sentence:', sentence);
    console.log('Reversed Sentence:', reversedSentence);;
}

reverseWordsInSentence();