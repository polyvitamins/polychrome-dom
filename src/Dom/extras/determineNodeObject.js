define(['polyvitamins~polyscope@master', './createChild.js', 'polyvitamins~polyscope@master/gist/common/toArray.js', 'polyvitamins~polyscope@master/system/api/determineClass'], function($, createChild, toArray, determineAbstractClass) {
	return function(subject, data) {
		var objects = [],
		absClass=determineAbstractClass.call($, subject);
		if (absClass.indexOf("HTMLELement")>=0) {
				/* Force HTML Elements */
				objects = [subject];
		} else if (
			absClass.indexOf("Selector")>=0 ||
			absClass.indexOf("String")>=0

		) {
			/* Create element */
			objects = createChild(subject, data||{});
		} else if (
			absClass.indexOf("Array")>=0 ||
			absClass.indexOf("RichArray")>=0 ||
			absClass.indexOf("Query")>=0 
		) {
			objects = toArray(subject);
		} else {
			console.dir(subject);
				$.warn('Selector unknown format '+absClass[0]); 
		}

		return objects;
	}
})