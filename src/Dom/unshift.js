define(['$//$', './../Dom','./extras/determineNodeObject.js','$//gist/common/toArray.js','$//classes/Eacher/each'], function($, Dom, determineNodeObject,toArray) {
	Dom.extend({
		unshift: function(subject, data) {
			var kit = [];

			var objects = determineNodeObject(subject, data);
				this.each(function(element) {
					for (i=0;i<objects.length;++i) {
						if (element.firstChild!==null)
						element.insertBefore(objects[i], element.firstChild);
						else element.appendChild(objects[i]);
						kit.push(objects[i]);
					}
				});
			
			return $(kit, 'HTMLElement');
		}
	});
});