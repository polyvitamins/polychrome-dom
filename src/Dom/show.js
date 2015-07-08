define(['$//$', './../Dom','./css', '$//classes/Eacher/each'], function(core, Dom) {
	Dom.extend({
		show: function() {
			this.each(function(elem) {
				if ("undefined"!==typeof elem.backupStyle && elem.backupStyle.display) {
					core(elem).css("display", elem.backupStyle.display);
				}
				else {
					core(elem).css("display", "");
				};
			});
			
			return this;
		}
	});
});