function sozder(word1, word2) {
  if (word1.toLowerCase() === word2.toLowerCase()) {
      return "Сөздер бірдей";
  } else {
      return "Сөздер әртүрлі";
  }
}
console.log(sozder("Javascript", "javascript"));
console.log(sozder("Hello", "world"));

