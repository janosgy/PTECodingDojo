Translation = function(translation, matchWhen) {

	this.match = function(pattern) {
		return matchWhen(pattern);
	};

	this.getValue = function() {
		return translation;
	};

};