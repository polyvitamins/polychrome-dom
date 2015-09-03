define(['./../Dom','polyvitamins~polychrome@master/gist/common/addEvent.js','polyvitamins~polychrome@master/gist/common/removeEvent.js','polyvitamins~polychrome@master/gist/common/toArray.js','polyvitamins~polychrome-eacher@master/each'], function(Dom, addEvent, removeEvent, toArray) {
	Dom.extend({
		bind : function() {
			var args = arguments;
			var events = args[0].split(' ');
			this.each(function() {
				if (events[e]==='') return true;
				for (var e = 0;e<events.length;++e) {
					addEvent(this, events[e], args[1], args[2]||false);
				}
			});
			return this;
		},
		on : function() {
			return this.bind.apply(this, arguments);
		},
		once: function() {
			var args = toArray(arguments);
			args[2] = true;
			return this.bind.apply(this, args);
		},
		unbind : function() {
			var args = arguments;
			var events = args[0].split(' ')
			this.each(function() {
				for (var e = 0;e<events.length;++e) {
			   		removeEvent(this, events[e], args[1]||false);
			   	}
			});
			return this;
		}
	});
});