Translator = function() {
    var translations;

    this.addDictionary = function(dictionary) {
        translations = dictionary.getTranslations();
    };

    this.getTranslationOf = function(number) {
        for (var i = 0, translation; translation = translations[i]; i++) {
            if (translation.match(number)) {
                return translation.getValue();
            }
        }

        return number;
    }

};