define(['./../Dom','polyvitamins~polyscope-eacher@master/each'], function(Dom) {
	Dom.extend({
		empty: function() {
			this.each(function() {
				this.innerHTML = '';
			});
			return this;
		}
	});
});