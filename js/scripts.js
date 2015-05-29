function findReplace(variables) {
  var phrase = variables[0];
  var findWord = variables[1];
  var replaceWord = variables[2];
  phrase = phrase.split(" ");
  phrase.forEach(function(element, index, array) {
    if (element == findWord) {
      array[index] = replaceWord;
    }
  });
  return phrase.join(" ");
}
