module('TranslatorTest', {
    setup: function() {
        this.translator = new Translator();
    }
});

test('Translator should return Fizz on 3 using FizzBuzzDictionary', function() {
    this.translator.addDictionary(new FizzBuzzDictionary());
    equal(this.translator.getTranslationOf(3), 'Fizz');
});

test('Translator should return alma on apple using EnglishToHungarianDictionary', function() {
    this.translator.addDictionary(new EnglishToHungarianDictionary());
    equal(this.translator.getTranslationOf('apple'), 'alma');
});
