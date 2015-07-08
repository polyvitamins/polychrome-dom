define(['./../Dom.js','$//$', '$//gist/generators/emmet'], function(Dom, core, emmet) {
	Dom.extend({
		zen: function(htmlcode) {
			return core(emmet(htmlcode, this[0]), 'HTMLElement');
		}
	});
});