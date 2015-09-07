define(['polyvitamins~polychrome@master', './../Dom','./show', './hide', 'polyvitamins~polychrome-eacher@master/each'], function($, Dom) {
	Dom.extend({
		present: function(flag) {
			this.each(function(elem) {
				if (flag) $(elem).show();
				else $(elem).hide();
			});
			
			return this;
		}
	});
});