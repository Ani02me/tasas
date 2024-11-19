function lin(word1, word2) {
    if (word1.toLowerCase() === word2.toLowerCase()) {
        return "Сөздер бірдей";
    } else {
        return "Сөздер әртүрлі";
    }
}

console.log(lin("Javascript", "javascript"));
console.log(lin("Hello", "world"));