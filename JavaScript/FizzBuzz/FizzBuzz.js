// qunit tesztkörnyezet.
//

Translation = function(translation, matchWhen) { 
    
    this.match = function(pattern) {
        return matchWhen(pattern);
    };

    this.getValue = function() {
        return translation;
    };
    
    
    
};

Translator = function(dictionary) {
    this.getTranslationOf = function(number) {
        for (var i=0; i<dictionary.length;i++){
            if (dictionary[i].match(number)){
                return dictionary[i].getValue();
            }
        }
    return number;
    }
}

FizzBuzz = function() {
    
    var divisorOf = function(number, divisor) {
        return number % divisor === 0;
    },
    isFizz = function(number) {
        return divisorOf(number, 3);
    },

    isBuzz = function(number) {
        return divisorOf(number, 5);
    },

    isFizzBuzz = function(number){
        return isFizz(number) && isBuzz(number);
    },

    translations = [
        new Translation('FizzBuzz', function(number) {
            return isFizzBuzz(number)
        }),
        new Translation('Buzz', function(number) {
            return isBuzz(number)
        }),
        new Translation('Fizz', function(number) {
            return isFizz(number)
        })
    ];    

    

    this.of = function(number) {

        var translator = new Translator(translations);
        return translator.getTranslationOf(number);

    };
        /*
        for(var i=0; i<translations.length;i++){
            if(translations[i].match(number)){
                return translations[i].getValue();
            }
        }*/
        /*
        var translation = new Translation('FizzBuzz', function(number) {
            return isFizzBuzz(number)
        });

        if(translation.match(number)) { // igaz-e a number erre a translation-re?
            return translation.getValue();
        }

        
        if(isFizzBuzz(number)){
            return 'FizzBuzz';
        }

        if(isFizz(number)) { // === típust is ellenőriz
            return 'Fizz'; 
        }

        if(isBuzz(number)) {
            return 'Buzz';
        }

    };*/
    //return number;

};
//stratégia. objektumként kezelem. 
