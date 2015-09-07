define(['./../Dom.js','polyvitamins~polychrome-eacher@master/each'], function(Dom) {
	Dom.extend({
		classed: function() {
			var className = arguments[0].split(' '),i,flag=!!arguments[1];
			this.each(function(el) {

				for (i=0;i<className.length;++i) {
					var st = el.className.split(' ');
					if (flag) {
						(st.indexOf(className[i])<0) && (st.push(className[i]), el.className = st.join(' '));
					}
					else
					{
						var st = el.className.split(' ');
						var index = st.indexOf(className[i]);
						if (index>-1) {
							st.splice(index, 1);
							el.className = st.join(' ');
						};
					}
				}
			});
			return this;
		}
	});
});