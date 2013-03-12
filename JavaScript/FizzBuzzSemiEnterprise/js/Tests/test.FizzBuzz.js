module('FizzBuzzTest', {
	setup: function() {
		this.fizzBuzz = new FizzBuzz();
	}
});

test('FizzBuzz should return 1 on 1', function() {
	equal(this.fizzBuzz.of(1), '1');
});

test('FizzBuzz should return 2 on 2', function() {
	equal(this.fizzBuzz.of(2), '2');
});

test('FizzBuzz should return Fizz on 3', function() {
	equal(this.fizzBuzz.of(3), 'Fizz');
});

test('FizzBuzz should return Fizz on 6', function() {
	equal(this.fizzBuzz.of(6), 'Fizz');
});

test('FizzBuzz should return Buzz on 5', function() {
	equal(this.fizzBuzz.of(5), 'Buzz');
});

test('FizzBuzz should return Buzz on 10', function() {
	equal(this.fizzBuzz.of(10), 'Buzz');
});

test('FizzBuzz should return FizzBuzz on 15', function() {
	equal(this.fizzBuzz.of(15), 'FizzBuzz');
});