define(['polyvitamins~polyscope@master', './../Dom'], function($, Dom) {
	Dom.extend({
		eq: function(index) {
			return $(this[index],'HTMLElement');
		}
	});
});