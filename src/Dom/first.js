define(['polyvitamins~polychrome@master', './../Dom'], function(core, Dom) {
	Dom.extend({
		first: function(selector) {
			return core(this[0]);
		}
	});
});