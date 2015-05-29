describe('findReplace', function() {

  it("changes a word to another given word", function() {
    var phrase = "change";
    var findWord = "change";
    phrase = findReplace([phrase, findWord, "word"]);
    expect(phrase).to.equal("word");
  });

});
