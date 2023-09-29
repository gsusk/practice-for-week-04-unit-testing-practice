const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;

  before(() => {
    word = new Word("Mario")
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("Mario");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = word.removeVowels();
      expect(newWord).to.deep.equal('Mr');

      const noVowel = new Word('try');
      const noVowels = noVowel.removeVowels();
      expect(noVowels).to.deep.equal('try');

      const onlyVowel = new Word('aeiou');
      const onlyVowels = onlyVowel.removeVowels();
      expect(onlyVowels).to.deep.equal('');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const newWord = word.removeConsonants();
      expect(newWord).to.deep.equal('aio');

      const noConsonants = new Word('eaui');
      const noConsWord = noConsonants.removeConsonants();
      expect(noConsWord).to.deep.equal('eaui');

      const fullConsonants = new Word('xrlrtx');
      const fullConsWord = fullConsonants.removeConsonants();
      expect(fullConsWord).to.deep.equal('')
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const newWord = word.pigLatin();
      expect(newWord).to.be.deep.equal('arioMay');

      const vowelAtStart = new Word('ant');
      const vowelsAtStart = vowelAtStart.pigLatin();
      expect(vowelsAtStart).to.be.deep.equal('antyay')
    });
  });
});