define(['polyvitamins~polyscope@master', './../Dom','./extras/determineNodeObject.js','polyvitamins~polyscope-eacher@master/each'], function(core, Dom, determineNodeObject) {
	Dom.extend({
		put: function(subject, data) {
			// This function return Array anyway
			var objects = determineNodeObject(subject, data);

			// Append child
			this.each(function() {
				for (i=0;i<objects.length;++i) {
					this.appendChild(objects[i]);
				}
			});
			
			return core(objects, 'HTMLElement');
		}
	});
});