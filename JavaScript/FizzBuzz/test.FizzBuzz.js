// elso lepes: tesztek megírása
// modul létrehozása
module('FizzBuzz', {
    setup: function() {
        // setup met. minden teszt előtt lefut.
        this.fizzBuzz = new FizzBuzz();
    }
}); // -> beállítja ide a tesztkörnyezetet.
//másik másik teszt scopeot indít
test('FizzBuzz should return 1 on 1', function() {
   // második paraméter a fv.
    equal(this.fizzBuzz.of(1), '1'); 
});

test('FizzBuzz should return 2 on 2', function() {
   // második paraméter a fv.
    equal(this.fizzBuzz.of(2), '2'); 
});

test('FizzBuzz should return Fizz on 3', function() {
   // második paraméter a fv.
    equal(this.fizzBuzz.of(3), 'Fizz'); 
});

test('FizzBuzz should return Fizz on 6', function() {
   // második paraméter a fv.
    equal(this.fizzBuzz.of(6), 'Fizz'); 
});

test('FizzBuzz should return Buzz on 5', function() {
   // második paraméter a fv.
    equal(this.fizzBuzz.of(5), 'Buzz'); 
});

test('FizzBuzz should return Buzz on 10', function() {
   // második paraméter a fv.
    equal(this.fizzBuzz.of(10), 'Buzz'); 
});

test('FizzBuzz should return FizzBuzz on 15', function() {
   // második paraméter a fv.
    equal(this.fizzBuzz.of(15), 'FizzBuzz'); 
});

test('Translator should return 1 on filter 1', function() {
	var translator = new Translator([
		new Translation('1', function(number){
			return number === 1;
		})	
	]);
    equal(translator.getTranslationOf(1), '1'); 
});

