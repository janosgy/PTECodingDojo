FizzBuzz = function() {

    var fizzBuzzDictionary = new FizzBuzzDictionary(),
        translator = new Translator();

    translator.addDictionary(fizzBuzzDictionary);

    this.of = function (number) {
        return translator.getTranslationOf(number);
    };

};