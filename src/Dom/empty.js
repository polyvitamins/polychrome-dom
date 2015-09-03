define(['./../Dom','polyvitamins~polychrome-eacher@master/each'], function(Dom) {
	Dom.extend({
		empty: function() {
			this.each(function() {
				this.innerHTML = '';
			});
			return this;
		}
	});
});