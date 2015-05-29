describe('findReplace', function() {

  it("changes a word to another given word", function() {
    var phrase = "change";
    var findWord = "change";
    phrase = findReplace([phrase, findWord, "word"]);
    expect(phrase).to.equal("word");
  });

  it("changes only the desired word in a phrase", function () {
    var phrase = "only change the desired word to be changed";
    var findWord = "change";
    phrase = findReplace([phrase, findWord, "update"]);
    expect(phrase).to.equal("only update the desired word to be changed");
  });

});
