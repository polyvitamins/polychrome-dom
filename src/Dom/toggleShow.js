define(['polyvitamins~polychrome@master', './../Dom','./css', './show', './hide', './is', 'polyvitamins~polychrome-eacher@master/each'], function(core, Dom) {
	Dom.extend({
		toggleShow: function() {
			this.each(function(elem) {
				if (core(elem).is(':visible')) {
					core(elem).hide();
				} else {
					core(elem).show();
				}
			});
			
			return this;
		}
	});
});