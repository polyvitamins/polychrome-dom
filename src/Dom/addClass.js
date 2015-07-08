define(['./../Dom.js','$//classes/Eacher/each'], function(Dom) {
	Dom.extend({
		addClass: function() {

			var className = arguments[0].split(' '),i;
			try {
				this.each(function(el) {
					for (i=0;i<className.length;++i) {
						var st = el.className.split(' ');
						(st.indexOf(className[i])<0) && (st.push(className[i]), el.className = st.join(' '));
					}
				});
			} catch(e) {
				console.dir(this);
			}
			return this;
		}
	});
});