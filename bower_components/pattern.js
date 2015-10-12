var Calculator = (function() {
    'use strict';
    var a = 5,
        b = 10;

    var Calculator = {
        init: function() {
        	this.a = a;
        	this.b = b;
        	console.log(a+b);
        }
    };

    return Calculator;
}());
	