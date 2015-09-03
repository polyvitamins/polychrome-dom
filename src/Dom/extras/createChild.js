define(['polyvitamins~polychrome@master'], function(core) {

	return function(nodeName, data, prepend) {
		var context = (this===window) ? document.body : this;
		data = data||{};
		try {
			var newElement = document.createElement(nodeName);
		} catch(e) {
			core.warn('Not valid filename: '+nodeName);
			return null;
		}

		;(!(prepend||false))?context.appendChild(newElement):(function() {
			
			if (context.firstChild!==null)
			context.insertBefore(newElement, context.firstChild);
			else context.appendChild(context);
		})();

		for (var name in data) {
			if (data.hasOwnProperty(name)) {
				newElement.setAttribute(name, data[name]);
			}
		}

		return core([newElement],'HTMLElement');
	}

});