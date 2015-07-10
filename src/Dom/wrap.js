define(['polyvitamins~polyscope@master', './../Dom','./extras/determineNodeObject.js','./parent.js','polyvitamins~polyscope-eacher@master/each'], function($,Dom,determineNodeObject) {
	Dom.extend({
		wrapAll: function(subject, data) {
			var objects = determineNodeObject(subject, data),i=0;
			if (subject.length===0) return null;

			for (i = 0; i<objects.length; i++) {
				this.parent()[0].appendChild(objects[i]);
			}

			this.each(function() {
				console.log('this', this, objects[0]);
				objects[0].appendChild(this);
			});

			return $(objects);
		}
	});
});