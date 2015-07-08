define(['$//$', './../Dom','./css', './show', './hide', './is', '$//classes/Eacher/each'], function(core, Dom) {
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