define(['./../Dom.js','$//classes/Eacher/each'], function(Dom) {
	Dom.extend({
		removeClass: function() {
			var className = arguments[0].split(' '),i;
			this.each(function(el) {
				for (i=0;i<className.length;++i) {
					var st = el.className.split(' ');
					var index = st.indexOf(className[i]);
					if (index>-1) {
						st.splice(index, 1);
						el.className = st.join(' ');
					};
				}
			});
			return this;
		}
	});
});