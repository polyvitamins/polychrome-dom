define(['polyvitamins~polychrome@master', './../Dom','polyvitamins~polychrome-eacher@master/each'], function(core, Dom) {
	Dom.extend({
		parent: function() {
			var parentList = [];
			this.each(function() {
				if (parentList.indexOf(this.parentNode)<0) parentList.push(this.parentNode);
			});
			return core(parentList, 'HTMLElement');
		}
	})
});