define(['polyvitamins~polychrome@master', './../Dom','./css', 'polyvitamins~polychrome-eacher@master/each'], function(core, Dom) {
	Dom.extend({
		hide: function(selector) {
			this.each(function(elem) {
				// Save current station
				var currentDisplay = core(elem).css("display");
				if (currentDisplay!=="none") {
					if ("undefined"===typeof elem.backupStyle) elem.backupStyle = {};
					elem.backupStyle.display=currentDisplay;
				};
				core(elem).css("display", "none");
			});
			return this;
		}
	});
});