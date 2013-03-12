EnglishToHungarianDictionary = function() {
    this.translations = [
        new Translation('alma', function(value) {
            return value == 'apple';
        }),
        new Translation('körte', function(value) {
            return value == 'pear';
        }),
        new Translation('barack', function(value) {
            return value == 'peach';
        })
    ];
};

EnglishToHungarianDictionary.prototype = new Dictionary();