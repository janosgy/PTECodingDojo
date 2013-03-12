FizzBuzzDictionary = function() {

    var divisorOf = function(number, divisor) {
        return number % divisor === 0;
    };

    this.translations = [
        new Translation('FizzBuzz', function(number) {
            return divisorOf(number, 3) && divisorOf(number, 5);
        }),
        new Translation('Fizz', function(number) {
            return divisorOf(number, 3);
        }),
        new Translation('Buzz', function(number) {
            return divisorOf(number, 5);
        })
    ];
};

FizzBuzzDictionary.prototype = new Dictionary();